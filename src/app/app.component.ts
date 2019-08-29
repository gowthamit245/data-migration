import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'migration';
  currentItem : any;
  itemType : any;
  source : any = [
    {'name':'My Sql','selected':'unSelect'},
    {'name':'Oracle','selected':'unSelect'},
    {'name':'Sql Server','selected':'unSelect'},
    {'name':'Netezza','selected':'unSelect'}
  ];
  selectedSource: any;

  constructor() { }

  ngOnInit() {
    this.currentItem = this.source;
    this.itemType = 'single';
    
    // this.itemType = 'multiple';
  }
  selectedItemObj(obj : any){
    this.selectedSource = obj;
    console.log(this.selectedSource);
  }

}
