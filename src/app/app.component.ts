import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPage=0;
  images=[
    {
      title:'Deniz Kum Güneş',
      url:'https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png'
    },
    {
      title:'Kedi Kız',
      url:'https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg'
    },
    {
      title:'Doğa',
      url:'https://w.wallhaven.cc/full/9m/wallhaven-9mkydk.jpg'
    },
    {
      title:'Deniz Altı',
      url:'https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg'
    },
    {
      title:'Kış Kar',
      url:'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png'
    },
    {
      title:'Kedi Kız',
      url:'https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg'
    },
    {
      title:'Doğa',
      url:'https://w.wallhaven.cc/full/9m/wallhaven-9mkydk.jpg'
    },
    {
      title:'Deniz Altı',
      url:'https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg'
    },
    {
      title:'Kış Kar',
      url:'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png'
    },
    {
      title:'Kedi Kız',
      url:'https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg'
    },
    {
      title:'Doğa',
      url:'https://w.wallhaven.cc/full/9m/wallhaven-9mkydk.jpg'
    },
    {
      title:'Deniz Altı',
      url:'https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg'
    },
    {
      title:'Kış Kar',
      url:'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png'
    },
    {
      title:'Kedi Kız',
      url:'https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg'
    },
    {
      title:'Doğa',
      url:'https://w.wallhaven.cc/full/9m/wallhaven-9mkydk.jpg'
    },
    {
      title:'Deniz Altı',
      url:'https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg'
    },
    {
      title:'Kış Kar',
      url:'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png'
    },
    {
      title:'Kedi Kız',
      url:'https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg'
    },
    {
      title:'Doğa',
      url:'https://w.wallhaven.cc/full/9m/wallhaven-9mkydk.jpg'
    },
    {
      title:'Deniz Altı',
      url:'https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg'
    },
    {
      title:'Kış Kar',
      url:'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png'
    },
    {
      title:'Kedi Kız',
      url:'https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg'
    },
    {
      title:'Doğa',
      url:'https://w.wallhaven.cc/full/9m/wallhaven-9mkydk.jpg'
    },
    {
      title:'Deniz Altı',
      url:'https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg'
    },
    {
      title:'Kış Kar',
      url:'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png'
    },

  ]



  previus(){
    this.currentPage--;
  }

  next(){
    this.currentPage++;
  }
  // getSelected(index:number){
  //  this.currentPage=index;
  // }

  PageIndex(i:number){
   return Math.abs(this.currentPage-i)<5;
  }

}
