import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  recentBooks = [];
  constructor(private route:Router) { }

  ngOnInit(): void {
    let recent = JSON.parse(localStorage.getItem('recentBooks'));
    if(recent){
      this.recentBooks = utils.getLast(recent, 5);
    }
  }

  openRecent(book){
    console.log(book);
    
    this.route.navigate([`/home/${book.route}`,{ type: `${book.type}`}])
    
  }

}
