import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TempateForm1Component } from './tempate-form1/tempate-form1.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { AuthGuard } from './share-service/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
      path: 'admin',
      loadChildren: () =>
        import('./admin/admin.routes').then(m => m.adminRoutes)
    },
    { 
      path: 'parent', component: ParentComponent,
      children: [
        {
          path: 'child', component: ChildComponent,
          canActivate: [],
        },
      ]
    },
    { path: 'tempateForm1', component: TempateForm1Component },
    { path: 'reactiveForm1', component: ReactiveForm1Component },
    //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', 
      loadComponent: () =>
        import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
      canActivate: [AuthGuard]
     }, 
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
      
];
