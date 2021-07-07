import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../callapi.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[] | null, searchtext: string): Item[] {
    if(items == null) return []
    return items.filter(item=>this.stringContains(item.text+item.header, searchtext))
  }

  stringContains(a: string, searchtext: string){
    return a.toLowerCase().indexOf(searchtext.toLowerCase())!==-1
  }

}
