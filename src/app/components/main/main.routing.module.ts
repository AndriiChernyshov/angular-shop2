import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent, FoodComponent, BeverageComponent, MiscComponent, CartComponent } from '.';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'food',
                component: FoodComponent
            },
            { 
                path: 'beverage',
                component: BeverageComponent
            },
            {
                path: 'misc',
                component: MiscComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: '',
                component: FoodComponent
            }
        ]
    }
];

export let mainRouterComponents = [ MainComponent, FoodComponent, BeverageComponent, MiscComponent, CartComponent ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MainRoutingModule{
//test v2
}