import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  redirigerVersPage(titre: string) {
    // Redirection vers la page correspondante en utilisant le titre
    this.router.navigateByUrl(`/${titre}`);
  }
}
