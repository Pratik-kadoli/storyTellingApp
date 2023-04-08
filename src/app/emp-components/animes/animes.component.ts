import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {

  books = [
    {
      title:"Death Note",
      path:"https://www.scribd.com/embeds/309737629/content?start_page=1&view_mode=scroll&access_key=key-NoXfsdj3BdIyzuR5aTvz/",
      type:"dn"
    },
    {
      title:"Attack on Titan",
      path:"https://www.scribd.com/embeds/356473938/content?start_page=1&view_mode=scroll&access_key=key-DfOUluvaocmBdpvINEDj/",
      type:"aot"
    },
    {
      title:"My Hero Academia",
      path:"https://www.scribd.com/embeds/538773910/content?start_page=1&view_mode=scroll&access_key=key-qJ6fsWZmTbBQkRUFZIES/",
      type:"mha"
    },
    {
      title:"Naruto",
      path:"https://www.scribd.com/embeds/500402946/content?start_page=1&view_mode=scroll&access_key=key-Ci4QbJAIaEAaRsQYGAxi/",
      type:"n"
    },
    {
      title:"Demon Slayer",
      path:"https://www.scribd.com/embeds/468041908/content?start_page=1&view_mode=scroll&access_key=key-VtxOSN2cbli5ueTO8B3B/",
      type:"ds"
    },
    {
      title:"Black Clover",
      path:"https://www.scribd.com/embeds/458475993/content?start_page=1&view_mode=scroll&access_key=key-yOdIqIeLmg6ysnGVqRy2/",
      type:"bc"
    },
    {
      title:"Fullmetal Alchemist",
      path:"https://www.scribd.com/embeds/282419454/content?start_page=1&view_mode=scroll&access_key=key-DAwcRHjexuwPkMUzHlsu/",
      type:"fa"
    },
    {
      title:"Chainsaw Man",
      path:"https://www.scribd.com/embeds/589329535/content?start_page=1&view_mode=scroll&access_key=key-QSbNZuQrsN2QNmJDhRDr/",
      type:"cn"
    },
    {
      title:"Jujutsu Kaisen",
      path:"https://www.scribd.com/embeds/513424582/content?start_page=1&view_mode=scroll&access_key=key-rqXDD6ynmRk1TBN6ZbLC/",
      type:"jk"
    },
    {
      title:"One Punch Man",
      path:"https://www.scribd.com/embeds/316660922/content?start_page=1&view_mode=scroll&access_key=key-73fRlIfMAzibwZkLWq1C/",
      type:"opm"
    }
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
        book['route'] = 'animes';
          recentBooks.push(book);
          localStorage.setItem('recentBooks',JSON.stringify(recentBooks));
      }
    }else{    
      book['route'] = 'animes';
      recentBooks.push(book);
      localStorage.setItem('recentBooks',JSON.stringify(recentBooks));
    }
  }
}
