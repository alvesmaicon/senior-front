import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: 'form', component: FormComponent},
  { path: 'form/:id', component: FormComponent},
  { path: 'list', component: ListComponent},
  { path: '', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


