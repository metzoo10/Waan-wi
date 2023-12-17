import { Component, OnInit } from '@angular/core';
import { IRecette } from 'src/models/recette.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bissap',
  templateUrl: './bissap.page.html',
  styleUrls: ['./bissap.page.scss'],
})
export class BissapPage implements OnInit {

  listrecettes: IRecette[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRecettes().subscribe((data: IRecette[]) => {
      this.listrecettes = data;
    })
  }

}
