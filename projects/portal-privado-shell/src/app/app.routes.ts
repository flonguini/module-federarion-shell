import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadComponent: async () =>
      (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: 'portal-privado-mfe1',
      exposedModule: './component',
      componentName: 'mfe1-web-component',
    },
    children: [
      {
        path: 'home',
        loadComponent: async () =>
          (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
        data: {
          remoteName: 'portal-privado-mfe1',
          exposedModule: './component',
          componentName: 'mfe1-web-component',
        },
      },
      {
        path: 'about',
        loadComponent: async () =>
          (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
        data: {
          remoteName: 'portal-privado-mfe1',
          exposedModule: './component',
          componentName: 'mfe1-web-component',
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
