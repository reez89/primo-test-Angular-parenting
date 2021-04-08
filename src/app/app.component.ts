import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  testElement = [{type: '', name:'', content: ''}];

  onServerAdded (serverData : {serverName: string, serverContent: string}){
  this.testElement.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
  }
  onBlueprintAdded (blueprintData : {serverName: string, serverContent: string}){
  this.testElement.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
  }
}
