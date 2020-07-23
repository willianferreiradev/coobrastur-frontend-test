import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'register',
    component: FormComponent
  },
  {
    path: 'edit/:id',
    component: FormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
