import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Logs } from 'src/app/classes/logs';

@Component({
  selector: 'app-navbar',
  templateUrl: './emp-navbar.component.html',
  styleUrls: ['./emp-navbar.component.scss']
})
export class EmpNavbarComponent implements OnInit {

  @Output() menuClick = new EventEmitter<any>();

  menus = [
    {
      name: 'Dashboard',
      path: 'dashboard' 
    },
    {
      name: 'Animes',
      path: 'animes' 
    },
    {
      name: 'Kids',
      path: 'kids' 
    },
    {
      name: 'Novels',
      path: 'novels' 
    },
  ]

  constructor( public router : Router ) { }

  ngOnInit(): void {}

  menuClicked( event ){

    this.menuClick.emit( event )
  }

  goToDashboard(){
    this.router.navigate([`home/dashboard`])
  }

  logout(){

    Logs.printLog( "LogOut" )
    this.router.navigate(['login'])
  }
}
