import { Component, OnInit } from '@angular/core';
import { CallapiService, Item } from '../../callapi.service';
import { share, switchMap } from 'rxjs/operators'

import { BehaviorSubject } from 'rxjs'



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  updatingId: string | undefined

  reload$ = new BehaviorSubject(0)

  items$ = this.reload$
    .pipe(
      switchMap(_=>this.capi.callapi()),
      share(),
    )


  constructor(private capi: CallapiService) {}

  ngOnInit(): void {
  }

  updateItem(item: Item){
    this.capi.update(item)
      .subscribe(()=>{
        this.updatingId=undefined
        this.reload$.next(1)
      })
  }

  delete(_id: string){
    this.capi.deleteitem(_id)
      .subscribe(result=>{
        console.log({result})
        this.reload$.next(1)
      })
  }
  update(_id: string){

  }
}
