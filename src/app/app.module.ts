import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { MyOrdersPage } from './pages/my-orders/my-orders.page';
import { ShoppingCartPage } from './pages/shopping-cart/shopping-cart.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { RegisterPage } from './pages/register/register.page';
import { EmailVerifiedPage } from './pages/email-verified/email-verified.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePage,
    RegisterPage,
    LoginPage,
    EmailVerifiedPage,
    ResetPasswordPage,
    HomePage,
    MyOrdersPage,
    ShoppingCartPage,
    ToolbarComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
