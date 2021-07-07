import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CallapiService, Item } from '../../callapi.service';
import { BehaviorSubject, from } from 'rxjs'
import { share, switchMap, filter } from 'rxjs/operators'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

  reload$ = new BehaviorSubject(0)

  items$ = this.reload$
    .pipe(
      switchMap(_=>this.capi.callapi()),
      share(),
    )


  searchitem: string = ''

  constructor(private capi: CallapiService) {}

  ngOnInit() {
    this.searchString()
  }

  onChange():void{
    console.log(this.searchitem)
  }

  searchString(){
  }

}
