import { Component, OnInit } from '@angular/core';
import { IRecette } from 'src/models/recette.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-yassa',
  templateUrl: './yassa.page.html',
  styleUrls: ['./yassa.page.scss'],
})
export class YassaPage implements OnInit {

  listrecettes: IRecette[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRecettes().subscribe((data: IRecette[]) => {
      this.listrecettes = data;
    })
  }

}
