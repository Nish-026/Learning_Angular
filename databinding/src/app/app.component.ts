import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'server',name:'testserver',content:'just a test'}];
  title = 'databinding';
  
  
  onAddServer(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
   }

   onAddBlueprint(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
   }
}
