import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.credentials = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.credentials.reset({ email: '', password: '' });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.apiService.login(this.credentials.value).subscribe(
      async () => {
        await loading.dismiss();
        this.router.navigateByUrl('/cities', { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.msg,
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.apiService.signUp(this.credentials.value).subscribe(
      async () => {
        await loading.dismiss();
        this.login();
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Signup failed',
          message: res.error.msg,
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}
