import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardService } from './admin-dashboard/admin-dashboard.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { AddEditComponent } from '../news/add-edit/add-edit/add-edit.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
    ]
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AdminDashboardService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {
}
