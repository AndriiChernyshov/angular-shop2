import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminProductListComponent, AdminProductEditComponent } from '.';

import { ProductResolveGuard } from '../../guards/product-resolve.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
    },
    {
        path: 'product-edit/:id',
        component: AdminProductEditComponent,
        resolve: {
            product: ProductResolveGuard
        }
    },
    {
        path: 'product-add',
        component: AdminProductEditComponent,
        resolve: {
            product: ProductResolveGuard
        }
    }

];

export let mainRouterComponents = [ AdminComponent, AdminProductListComponent, AdminProductEditComponent ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [ProductResolveGuard],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}