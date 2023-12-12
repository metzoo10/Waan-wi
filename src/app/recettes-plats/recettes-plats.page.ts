import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes-plats',
  templateUrl: './recettes-plats.page.html',
  styleUrls: ['./recettes-plats.page.scss'],
})
export class RecettesPlatsPage implements OnInit {

  constructor(private router: Router) { }

  redirigerVersPage(titre: string) {
    // Redirection vers la page correspondante en utilisant le titre
    this.router.navigateByUrl(`/${titre}`);
  }

  ngOnInit() {
  }
  
}