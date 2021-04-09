import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.css']
})
export class ChildTwoComponentComponent implements OnInit, OnChanges,DoCheck,AfterContentInit {

  @Input('alias-quellochevoglio') element : {type: string, name: string, content:string }; /* dichiariamo l'elemento con typescript */
  @ContentChild('paragraphName') static: true;

  constructor() {
    console.log('constructor call')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges call')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit call')
  }

  ngDoCheck(){
    console.log('ngDoCheck call')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call')
  }
}
