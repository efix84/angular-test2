import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CallapiService, Item } from 'src/app/callapi.service';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {

  @Input()
  item: Item | undefined

  @Output()
  update = new EventEmitter<any>()

  @Output()
  cancel = new EventEmitter<any>()

  myFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private capi: CallapiService,
    private router: Router
  ) {
    this.myFormGroup = this.formBuilder.group({
      name: '',
      alter: '',
      geburtsort: '',
  })
  }

  ngOnInit(): void {
    console.log('update form', this.item)
    // this.myFormGroup.setValue(this.item)
    if(this.item===undefined){
    } else {
      this.myFormGroup = this.formBuilder.group(this.item)
    }
  }

  onCancel(){
    this.myFormGroup.reset()
    this.cancel.emit()
  }

  async onSubmit(): Promise<void> {
    if(this.item===undefined){
      // create item
      this.capi.sendtoapi(this.myFormGroup.value).subscribe(()=>{
        this.router.navigate(['/index'])
      })
    } else {
      // report form submit
      this.update.emit({
      ...this.myFormGroup.value,
      _id: this.item._id
      })
    }
  }

}
