import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor (private router: Router, public auth: AuthService) {

  }
  goRegister() {
    this.router.navigateByUrl('tabs/inscription');
  }

  goLogin() {
    this.router.navigateByUrl('tabs/connexion');
  }

  logout() {
    // this.menu.close();
    this.auth.quit();
    this.router.navigateByUrl('/tabs/tab1');
  }
}
