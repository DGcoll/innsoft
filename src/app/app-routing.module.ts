import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LayoutComponent } from "./components/layout/layout.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = ([
  {
    path: "",
    component: LayoutComponent,
    children: [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
            path: "home",
            component: HomeComponent
        }
      ],
  }
]) as any;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
