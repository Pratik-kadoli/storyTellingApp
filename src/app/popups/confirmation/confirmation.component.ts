import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  title = "Confirmation";
  message = "Are you sure you want to delete ?";

  constructor( public dialogRef: MatDialogRef<ConfirmationComponent>) { }

  ngOnInit(): void {

  }

  closeDialog(){

    this.dialogRef.close();
  }

  proceed( value ){

    this.dialogRef.close( value );

}

}
