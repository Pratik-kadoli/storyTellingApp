import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.scss']
})
export class NovelsComponent implements OnInit {

  books = [
    {
      title:"Percy Jackson",
      path:"https://www.scribd.com/embeds/326502546/content?start_page=1&view_mode=scroll&access_key=key-xsvoVkL48Gdqzuh7n1qk/",
      type:"pj"
    },
    {
      title:"Artemis Fowl",
      path:"https://www.scribd.com/embeds/126044270/content?start_page=1&view_mode=scroll&access_key=key-ejto0jiq39emnk2o81l/",
      type:"af"
    },
    {
      title:"Indian English Novel",
      path:"https://www.scribd.com/embeds/473709329/content?start_page=1&view_mode=scroll&access_key=key-e4DOvwo452AqRCBd9Oag/",
      type:"ien"
    },
    {
      title:"WatchMen",
      path:"https://www.scribd.com/embeds/13749342/content?start_page=1&view_mode=scroll&access_key=key-2a2974wc61o4chifpq6r/",
      type:"wm"
    },
    {
      title:"Flora and Ulysses",
      path:"https://www.scribd.com/embeds/178397852/content?start_page=1&view_mode=scroll&access_key=key-23xwcq36dw9oizqubail/",
      type:"fu"
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
        book['route'] = 'novels';
          recentBooks.push(book);
          localStorage.setItem('recentBooks',JSON.stringify(recentBooks));
      }
    }else{    
      book['route'] = 'novels';
      recentBooks.push(book);
      localStorage.setItem('recentBooks',JSON.stringify(recentBooks));
    }
  }

}
