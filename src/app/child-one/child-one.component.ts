import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  @Input() val:string = "";
  @Output() res = new EventEmitter();
  constructor() { 
    
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.res.emit("angular");
    },2000)
   
  }
  }

  
 


