import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-rows',
  templateUrl: './nested-rows.component.html',
  styles: [
  ]
})
export class NestedRowsComponent implements OnInit {

  @Input() 
  title = '';
  @Input()
  data: any;

  keys: any[] | undefined;
  keySize = 0;


  constructor() { }

  ngOnInit(): void {
    if(this.data) {
      this.keys =  Object.keys(this.data).sort();
      this.keySize = this.keys.length;
    }
  }

  getLabel(key: string) {
    const label = key.replace(/([A-Z])/g, " $1");
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

}
