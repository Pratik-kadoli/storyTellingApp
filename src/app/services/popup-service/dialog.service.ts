import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../popups/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }


  openDialog( dataValue ){
    
    return this.dialog.open(DialogComponent,{
      panelClass:'confirm-dialog-container',
      width:"300px",
      disableClose: true,
      data:dataValue  
    })
  }
}
