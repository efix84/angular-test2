import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  testvariable = "bla bla"

  counter$ = new BehaviorSubject<any>(0)

  constructor() { }

  ngOnInit(): void {
  }


  childCall(data: string[]){
    this.counter$.next(this.counter$.value+1)
    console.log(data)
  }

}
