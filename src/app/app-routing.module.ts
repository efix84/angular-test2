import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularComponent } from './pages/formular/formular.component';
import { IndexComponent } from './pages/index/index.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'formular', component: FormularComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
