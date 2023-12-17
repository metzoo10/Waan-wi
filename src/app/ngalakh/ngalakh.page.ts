import { Component, OnInit } from '@angular/core';
import { IRecette } from 'src/models/recette.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ngalakh',
  templateUrl: './ngalakh.page.html',
  styleUrls: ['./ngalakh.page.scss'],
})
export class NgalakhPage implements OnInit {

  listrecettes: IRecette[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRecettes().subscribe((data: IRecette[]) => {
      this.listrecettes = data;
    })
  }

}
