import { Component, OnInit, Input  } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dul-multiselect',
  templateUrl: './dul-multiselect.component.html',
  styleUrls: ['./dul-multiselect.component.css']
})
export class DulMultiselectComponent implements OnInit {

  @Input('item') currentItem: any;
  @Input() itemType: any;

  @Output() selectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  selectSingleItem(index, selected){
    if(this.itemType == 'single'){
      if(selected == 'unSelect'){
        this.currentItem.forEach(obj => {
          obj.selected = 'unSelect';
        });
        this.currentItem[index].selected = 'selected';
      } else {
        this.currentItem[index].selected = 'unSelect';
      }
    } else if(this.itemType == 'multiple'){
      if(selected == 'unSelect'){
        this.currentItem[index].selected = 'selected';
      } else {
        this.currentItem[index].selected = 'unSelect';
      }
    }
    this.selectedItem.emit(this.currentItem);
    return false;
  }

}
