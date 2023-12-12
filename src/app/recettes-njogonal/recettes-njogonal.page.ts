import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes-njogonal',
  templateUrl: './recettes-njogonal.page.html',
  styleUrls: ['./recettes-njogonal.page.scss'],
})
export class RecettesNjogonalPage implements OnInit {

  constructor(private router: Router) { }

  redirigerVersPage(titre: string) {
    // Redirection vers la page correspondante en utilisant le titre
    this.router.navigateByUrl(`/${titre}`);
  }

  ngOnInit() {
  }

}
