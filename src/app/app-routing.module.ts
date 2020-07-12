import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';

  import { from } from 'rxjs';

  const routes: Routes= [
    { path:'', redirectTo:'Home', pathMatch:'full'},
    { path:"home", component:HomeComponent},
    { path: "product", component:ProductComponent},
    { path: "update", component: UpdateComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  HomeComponent,
  ProductComponent,
  UpdateComponent
]
