import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalDetailComponent } from './approval-detail/approval-detail.component';
import { ApprovalCommissionComponent } from './approval-detail-commission/approval-commission.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'approval', component: ApprovalComponent },
    { path: 'approval-detail', component: ApprovalDetailComponent },
    { path: 'approval-commission', component: ApprovalCommissionComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
