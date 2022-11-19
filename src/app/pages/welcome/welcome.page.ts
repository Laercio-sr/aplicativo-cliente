import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  private loading: any;
  constructor(
    private Auth:AuthService, 
    public router: Router,
    private loadCtr: LoadingController,
    private toastCtr: ToastController
    
  ) { }

  loginGoogle(){
    this.Auth.loginGoogle();
  }
  
  async presentLoading() {
    this.loading = await this.loadCtr.create({ message: 'Carregando...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtr.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
