import { Component, OnInit, Input } from '@angular/core';
import { GridData } from '../../models/grid.model';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  @Input() data: GridData;
  @Input() recordCountPerPage: number = 20;

  public isLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.data)

    this.isLoaded = true;
  }

}
