import { Component, OnInit } from '@angular/core';
import { IRecette } from 'src/models/recette.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kandia',
  templateUrl: './kandia.page.html',
  styleUrls: ['./kandia.page.scss'],
})
export class KandiaPage implements OnInit {

  listrecettes: IRecette[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRecettes().subscribe((data: IRecette[]) => {
      this.listrecettes = data;
    })
  }

}
