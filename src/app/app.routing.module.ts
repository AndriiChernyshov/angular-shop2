import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, PageNotFoundComponent, LoginComponent } from './components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: 'app/components/main/main.module#MainModule'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'admin',
        loadChildren: 'app/components/admin/admin.module#AdminModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

export let appRouterComponents = [AboutComponent, PageNotFoundComponent, LoginComponent];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule{

}