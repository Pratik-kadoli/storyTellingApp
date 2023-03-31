import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Logs } from 'src/app/classes/logs';
import { regexValidation } from 'src/app/classes/regex';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  title = "Add Employee Details";

  departments = ['Frontend Department', 'Backend Department', 'Sales Department', 'Admin Department', 'HR Department'];

  form : FormGroup = this._fb.group({

    empName : ['',Validators.required],
    empMobile : ['',Validators.required],
    empEmail : ['',Validators.pattern(regexValidation.EMAIL)],
    empAddress : ['',Validators.required],
    empDept : ['',Validators.required]

  })

  constructor( public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _fb : FormBuilder ) { }

  ngOnInit(): void {

    if( this.data != "Add"){

        this.title = "Update Employee Details";
        this.form.patchValue({

            empName : this.data['emp-name'],
            empMobile : this.data['emp-mobile'],
            empEmail : this.data['emp-email'],
            empAddress : this.data['emp-address'],
            empDept : this.data['emp-dept']
        })
    }
  }

  closeDialog(){

    this.dialogRef.close();
  }

  onSubmit( formValue ){

    Logs.printLog( formValue );
    let obj = {
      "emp-name" : formValue.empName,
      "emp-mobile" : formValue.empMobile,
      "emp-email" : formValue.empEmail,
      "emp-dept" : formValue.empDept,
      "emp-address" : formValue.empAddress,
    }

    this.dialogRef.close( obj );
  }

}
