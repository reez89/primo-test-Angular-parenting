import {Component, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput){
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent:this.newServerContent
    });
  }
  onAddBlueprint(serverInput){
    this.blueprintCreated.emit({
      serverName: serverInput.value,
      serverContent:this.newServerContent
    });
  }
}
