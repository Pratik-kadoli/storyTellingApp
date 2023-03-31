import { Component, OnInit, ViewChild } from '@angular/core';
import { Logs } from '../../classes/logs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Table } from 'src/app/Interfaces/table';
import { TableInfo } from 'src/app/classes/table';
import { environment } from 'src/environments/environment';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/popups/add-employee/add-employee.component';
import { DialogService } from 'src/app/services/popup-service/dialog.service';
import { SUCCESS_DIALOG_DATA } from 'src/app/classes/custom-messages/customDialogMessage';
import { ConfirmationComponent } from 'src/app/popups/confirmation/confirmation.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  title = "Employee List";
  resourceName = "employeeDetails";

  dataSource: MatTableDataSource<any>;
  columnDetails: Table[] = TableInfo.dataSourceColumnDetailsArray;
  totalCount: any;
  actionsMenuOptions: any;
  columnHeaderName: any = [];

  baseUrl : String = "";
  noDataPresent: boolean = false;
  showCustomSpinner: boolean = false;

  constructor( public _api : ApiFactoryService, public _dialog : MatDialog, public dialog : DialogService) { }

  ngOnInit(): void {

    this.showCustomSpinner = true;
    this.baseUrl = environment.base_url + environment.version + this.resourceName;
    this.getEmployeesList( this.baseUrl );
  }

  getEmployeesList( urlStr ){

    this._api.getData( urlStr ).subscribe( res => {

      Logs.printLog( res , "this is our List")
      this.prepareData( res );
    }, err =>{

      Logs.printLog( err, "Error Occured !")
    })
  }

  prepareData( value ) {
     
    let data = value;

    if ( data.length == 0 ) {
      Logs.printLog('no data Present ');
      this.showCustomSpinner = false;
      this.noDataPresent = true;
    } else {

      this.noDataPresent = false;
      this.showCustomSpinner = false;
      this.columnHeaderName = this.columnDetails.map( t => t.key);
      this.dataSource = new MatTableDataSource( data );
    
    }
  }

  
  handleAction(key, data) {

    switch ( key ) {

      case "edit":
        this.handleEditData( data );
        break;
      case "delete":
        this.confirmDelete( data );
        break;
    }
  }

  handleAddData(){

    Logs.printLog("add Button Clicked");
    this._dialog.open(AddEmployeeComponent,{
      panelClass: "custom-dialog-container",
      width:"720px",
      height : "auto",
      data: "Add",
      disableClose: false,
      autoFocus: false,
    }).afterClosed().subscribe( res =>{

      if( res ){

        this.handlePostData( res );
      }
    },err =>{

      Logs.printLog( err )
    })
  }

  handlePostData( formData ){

    this._api.postData( this.baseUrl, formData ).subscribe( res =>{

      Logs.printLog( res );
      this.dialog.openDialog(SUCCESS_DIALOG_DATA.successCreateDialogData).afterClosed();
      this.getEmployeesList( this.baseUrl );
    }, err =>{

      this.dialog.openDialog(SUCCESS_DIALOG_DATA.FailCreateDialogData).afterClosed();
      Logs.printLog( err )
    })
  }

  handleEditData( data ){

    Logs.printLog("Edit Button Clicked");
    this._dialog.open(AddEmployeeComponent,{
      panelClass: "custom-dialog-container",
      width:"720px",
      height : "auto",
      data: data,
      disableClose: false,
      autoFocus: false,
    }).afterClosed().subscribe( res =>{

      if( res ){

        this.handleUpdationData( res , data['emp-id'] );
      }
    },err =>{

      Logs.printLog( err )
    })
  }

  handleUpdationData( formData, id ){

    let url = this.baseUrl + `/${id}`;

    this._api.putData( url, formData ).subscribe( res =>{

      Logs.printLog( res );
      this.dialog.openDialog(SUCCESS_DIALOG_DATA.successUpdateDialogData).afterClosed();
      this.getEmployeesList( this.baseUrl );
    }, err =>{

      this.dialog.openDialog(SUCCESS_DIALOG_DATA.FailUpdateDialogData).afterClosed();
      Logs.printLog( err )
    })
  }

  confirmDelete( rowData ){

    this._dialog.open(ConfirmationComponent,{
      panelClass: "custom-dialog-container",
      width:"720px",
      height : "auto",
      disableClose: false,
      autoFocus: false,
    }).afterClosed().subscribe( res =>{

      if( res ){

        this.handleDeleteData( rowData );
      }
    },err =>{

      Logs.printLog( err )
    })

  }

  handleDeleteData( rowData ) {

    let id = parseInt(rowData['emp-id']);

    let url = this.baseUrl + `/${id}`;

    this._api.deleteData( url ).subscribe( res => {

      Logs.printLog( res , "this is our result");
      this.dialog.openDialog(SUCCESS_DIALOG_DATA.successDeleteDialogData).afterClosed();
      this.showCustomSpinner = true;
      this.getEmployeesList( this.baseUrl );
    }, err =>{

      this.dialog.openDialog(SUCCESS_DIALOG_DATA.FailDeleteDialogData).afterClosed();
      Logs.printLog( err, "Error Occured !")
    })
  }
}
