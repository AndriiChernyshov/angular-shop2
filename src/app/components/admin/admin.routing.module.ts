import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminProductListComponent } from '.';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
    }
];

export let mainRouterComponents = [ AdminComponent, AdminProductListComponent ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}