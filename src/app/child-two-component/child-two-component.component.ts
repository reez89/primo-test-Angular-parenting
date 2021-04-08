import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.css']
})
export class ChildTwoComponentComponent implements OnInit {

  @Input('alias-quellochevoglio') element : {type: string, name: string, content:string }; /* dichiariamo l'elemento con typescript */


  constructor() { }

  ngOnInit(): void {
  }

}
