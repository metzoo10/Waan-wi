import { Component, OnInit } from '@angular/core';
import { IRecette } from 'src/models/recette.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accara',
  templateUrl: './accara.page.html',
  styleUrls: ['./accara.page.scss'],
})
export class AccaraPage implements OnInit {

  listrecettes: IRecette[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRecettes().subscribe((data: IRecette[]) => {
      this.listrecettes = data;
    })
  }

}
