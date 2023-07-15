import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{
  @Input('srvElement') element: {type: string, name: string, component: string}
  
  constructor(){
    console.log('Constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);

  }
  ngOnInit() {
    console.log('ngOnInit called');
  }

}
