import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {
  books = [
    {
      title:"Riddles",
      path:"https://www.scribd.com/embeds/365912985/content?start_page=1&view_mode=scroll&access_key=key-1eWjHemBfMn2GmI4lWG0/",
      type:"rd"
    },
    {
      title:"Mind Mapping for Kids",
      path:"https://www.scribd.com/embeds/349288835/content?start_page=1&view_mode=scroll&access_key=key-gg8WzOUOLlHeN2gQphQn/",
      type:"mm"
    },
    {
      title:"Puzzlebook for Kids",
      path:"https://www.scribd.com/embeds/191228548/content?start_page=1&view_mode=scroll&access_key=key-1x4uccsy0d557313s9fz/",
      type:"pk"
    },
    {
      title:"Kids Stories",
      path:"https://www.scribd.com/embeds/369570805/content?start_page=1&view_mode=scroll&access_key=key-3qRzrTxJAJ6VORHyIMvP/",
      type:"ks"
    },
  ]

  constructor(private sanitizer: DomSanitizer,private acRoute : ActivatedRoute) { }

  ngOnInit(): void {
    if(this.acRoute?.snapshot?.params?.type){
      this.openRecentBook(this.acRoute?.snapshot?.params?.type);
    }
  }

  openRecentBook(type){
    let len = this.books.length;
    for (let i = 0; i < len; i+=1) {
      if(type == this.books[i].type){
        let iframe = document.getElementsByTagName('iframe');
        iframe[0].src = this.books[i].path;
      }   
    }
  }


  openBook(book){
    let iframe = document.getElementsByTagName('iframe');
    iframe[0].src = book.path;
    let recentBooks = JSON.parse(localStorage.getItem('recentBooks')) || [];
    let len = recentBooks.length;
    if(recentBooks && recentBooks.length > 0){
      let notInRecents = true;
      for (let i = 0; i < len; i+=1) { 
        if(book.type == recentBooks[i].type){
          notInRecents = false;
        }
      }
      if(notInRecents){
        book['route'] = 'kids';
          recentBooks.push(book);
          localStorage.setItem('recentBooks',JSON.stringify(recentBooks));
      }
    }else{    
      book['route'] = 'kids';
      recentBooks.push(book);
      localStorage.setItem('recentBooks',JSON.stringify(recentBooks));
    }
  }
}
