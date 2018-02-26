import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { FreetimeComponent } from './pages/freetime/freetime.component';

const routes: Routes = [
  {path: '', redirectTo: '/work-time', pathMatch: 'full'},
  {path: 'work-time', component: IndexComponent},
  {path: 'freetime', component: FreetimeComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
