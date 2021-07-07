import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Item {
  _id?: string
  header: string
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(private http: HttpClient) { }

  callapi(){
    return this.http.get<Item[]>('http://localhost:3000/api')
  }

  sendtoapi(item: Item){
    return this.http.post('http://localhost:3000/input', item)
  }

  deleteitem(_id: string){
    return this.http.delete(`http://localhost:3000/delete/${_id}`)
  }

  update(item: Item){
    console.log('update', item._id, item)
    return this.http.post(`http://localhost:3000/item/${item._id}`, item)
  }

}
