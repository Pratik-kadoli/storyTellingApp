import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData, 
    public dialogref : MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogref.close();  
   }, 1500)
  }

}
