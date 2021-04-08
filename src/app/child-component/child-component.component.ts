import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContent',{static: true}) serverContent: ElementRef; // possiamo passare sia una stringa, che il componente al quale vogliamo fare riferimento.
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput : HTMLInputElement){
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }
  onAddBlueprint(serverInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: serverInput.value,
      serverContent:this.serverContent.nativeElement.value
    });
  }
}
