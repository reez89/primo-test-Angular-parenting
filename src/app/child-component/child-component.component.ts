import {Component, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContent:this.newServerContent});
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent:this.newServerContent});
  }
}
