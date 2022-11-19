import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { EmailVerifiedPage } from './pages/email-verified/email-verified.page';

import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { MyOrdersPage } from './pages/my-orders/my-orders.page';
import { RegisterPage } from './pages/register/register.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { ShoppingCartPage } from './pages/shopping-cart/shopping-cart.page';
import { WelcomePage } from './pages/welcome/welcome.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }, 
  
  { path: 'welcome', component: WelcomePage },
  { path: 'register', component: RegisterPage },
  { path: 'email-verified', component: EmailVerifiedPage },
  { path: 'reset-password', component: ResetPasswordPage },

  
  { 
    path: 'login', 
    component: LoginPage, canActivate:[LoginGuard] 
  },  
  { 
    path: 'home', 
    component: HomePage, canActivate:[AuthGuard]
  },    
  {
    path: 'my-orders',
    component: MyOrdersPage, canActivate:[AuthGuard]
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartPage, canActivate:[AuthGuard]
  },  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
