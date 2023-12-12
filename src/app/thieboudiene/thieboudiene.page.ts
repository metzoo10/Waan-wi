import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IRecette } from 'src/models/recette.model';

@Component({
  selector: 'app-thieboudiene',
  templateUrl: './thieboudiene.page.html',
  styleUrls: ['./thieboudiene.page.scss'],
})
export class ThieboudienePage implements OnInit {

  listrecettes: IRecette[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRecettes().subscribe((data: IRecette[]) => {
      this.listrecettes = data;
    })
  }

}
