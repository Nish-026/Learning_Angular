import { Component,EventEmitter,Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>;
  @Output() blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>;
    //  newServerName= '';
    //  newServerContent='';  this we used for 2 way binding, now we shifted to local ref that's implemented using viewChild
    @ViewChild('serverContentInput', {static: true}) serverContentInput: any;

     constructor(){}

     onAddServer(nameInput: HTMLInputElement){
      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      })
     }

     onAddBlueprint(nameInput: HTMLInputElement){
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      })
     }
}
