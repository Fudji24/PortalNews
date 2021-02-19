import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full'},
  {
    path: 'news',
    loadChildren: () => import(`./modules/news/news.module`).then(
      module => module.NewsModule
    )
  },
  {
    path: 'admin',
    loadChildren: () => import(`./modules/admin/admin.module`).then(
      module => module.AdminModule
    )
  },
  {
    path: 'login',
    loadChildren: () => import(`./modules/auth/auth.module`).then(
      module => module.AuthModule
    )
  },
];

export const routing = RouterModule.forRoot(routes);


