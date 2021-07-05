import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularComponent } from './pages/formular/formular.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './pages/test/test.component';
import { ChildComponent } from './pages/test/components/child/child.component';
import { ParentComponent } from './pages/test/components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularComponent,
    IndexComponent,
    TestComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
