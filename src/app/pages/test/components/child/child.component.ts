import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() item = '';

  @Input() counter$?: Subject<number>

  @Output() testevent = new EventEmitter<string[]>()

  constructor() { 
  }

  ngOnInit(): void {
    if(this.counter$){
      this.counter$.subscribe(console.log)
    }
  }

  onClick(event?: MouseEvent){
    if(event){
      console.log({event})
    }
    this.testevent.emit(["bla", "bla", "bla"])
  }

}
