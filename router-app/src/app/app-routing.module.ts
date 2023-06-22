import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelloComponent } from "./greeter/hello.component";
import { WelcomeComponent } from "./greeter/welcome.component";
import { PagenotfoundComponent } from "./util/pagenotfound.component";

/**
 * Routing order
 *  The order of routes is imporatant because the Router uses a "first-match" wins strategy when matching routes.
 * The more specific routes must be place above less specific routes
 * //Static path 'path' first, followed by an empty path route, which matches default
 * The wild card routes always comes last because it matches every url and router selects it only if other routes dont match first.
 */

//Router Configuration: For which url and for which component we map
// /products => ProductsComponent
//menu is called as route.

//routes which is just variable, going to hold menu mapping configuration
const routes: Routes = [
  //index page configuration
  // {
  //   path: '', component: HelloComponent 
  // },
  {
    path: '', pathMatch: 'full', redirectTo: 'hello' //rediect can be used to show the same with different url
  },
  {
    path: 'how', pathMatch: 'full', redirectTo: 'welcome'
  },
  {
    path: 'hello', component: HelloComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  //page not found
  {
    path: '**', component: PagenotfoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // inject Router Configuration
  exports: [RouterModule] //RouterModule must be available outside
})
export class AppRoutingModule { }

