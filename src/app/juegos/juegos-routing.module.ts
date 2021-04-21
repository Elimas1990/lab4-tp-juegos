import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { MemotestComponent } from './memotest/memotest.component';
import { PptComponent } from './ppt/ppt.component';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [{ path: '', component: JuegosComponent },
{ path: 'tateti', component: TatetiComponent },
{ path: 'ppt', component: PptComponent },
{ path: 'memotest', component: MemotestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
