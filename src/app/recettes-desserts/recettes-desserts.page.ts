import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes-desserts',
  templateUrl: './recettes-desserts.page.html',
  styleUrls: ['./recettes-desserts.page.scss'],
})
export class RecettesDessertsPage implements OnInit {

  constructor(private router: Router) { }

  redirigerVersPage(titre: string) {
    // Redirection vers la page correspondante en utilisant le titre
    this.router.navigateByUrl(`/${titre}`);
  }

  ngOnInit() {
  }

}
