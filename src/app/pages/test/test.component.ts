import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  subject$ = new Subject<any>();

  constructor() {
    this.subject$.subscribe(console.log)
  }

  ngOnInit(): void {
  }

  callnext(){
    this.subject$.next([1,2,3])
  }

}
