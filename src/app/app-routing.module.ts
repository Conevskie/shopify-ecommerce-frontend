import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLandingPageComponent } from './components/product-landing-page/product-landing-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/recipes-detail/recipes-detail.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { categoryGuard } from './guards/category.guard';
import { productIdGuard } from './guards/product-id.guard';
import { productsResolver } from './resolvers/products.resolver';
import { recipeIdGuard } from './guards/recipe-id.guard';
import { recipesResolver } from './resolvers/recipes.resolver';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { authGuard } from './guards/auth.guard';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import {adminGuard} from "./guards/admin.guard";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AdminUserRolesComponent} from "./components/admin-user-roles/admin-user-roles.component";
import {AdminItemsComponent} from "./components/admin-items/admin-items.component";
import {AdminContactUsComponent} from "./components/admin-contact-us/admin-contact-us.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ProductLandingPageComponent,
    resolve: { resolver: productsResolver },
    pathMatch: 'full',
  },
  {
    path: 'our-story',
    component: OurStoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: UserSignInComponent,
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    component: UserSignUpComponent,
    pathMatch: 'full',
  },
  {
    path: 'order-completed',
    component: OrderCompletedComponent,
    pathMatch: 'full',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'page-not-found',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
  {
    path: 'recipes',
    resolve: { resolver: recipesResolver },
    canActivateChild: [recipeIdGuard],
    children: [
      {
        path: '',
        component: RecipesListComponent,
      },
      {
        path: ':recipeId',
        pathMatch: 'full',
        component: RecipesDetailComponent,
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'orders',
        component: AdminOrdersComponent
      },
      {
        path: 'roles',
        component: AdminUserRolesComponent
      },
      {
        path: 'items',
        component: AdminItemsComponent
      },
      {
        path: 'contact-us',
        component: AdminContactUsComponent
      }
    ]
  },
  {
    path: ':category',
    canActivate: [categoryGuard],
    canActivateChild: [productIdGuard],
    resolve: { resolver: productsResolver },
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: ':productId',
        pathMatch: 'full',
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
