import { Routes } from '@angular/router';
import { Home } from './features/home/components/home/home';
import { AllProducts } from './features/products/product/all-products/all-products';
import { ContactUs } from './features/contact-us/contact-us';
import { Cart } from './features/cart/cart/cart';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'product',component:AllProducts},
    {path:'contact',component:ContactUs},
    {path:'cart',component:Cart},
    {path:'**',component:NotFound}
    
];
