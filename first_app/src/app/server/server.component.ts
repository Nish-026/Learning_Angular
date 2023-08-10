import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // has to be unique
    templateUrl:'./server.component.html',
})
export class ServerComponent{
    // name= "Nishtha"
    allowedServer=false;
    serverCreationStatus= 'No server';
    serverUpdate=""
    serverCreated=false;
    user="offline";
    servers=["TestServer1","TestServer2","TestServer3","TestServer4"]
    constructor(){
        setTimeout(()=>{
          this.allowedServer=true;
        },2000)
    }
    createServer(){
        this.serverCreationStatus= 'Server created';
        this.serverCreated=true;
    }
    onUpdate(event:Event){
        this.serverUpdate= (<HTMLInputElement>event.target).value;
    }
    turnStatus(){
        if(this.user=="offline"){
             this.user="online"
        }else{
            this.user="offline"
        }
    }
    getColor(){
        return this.user==="offline"? 'red':'green'
    }

}