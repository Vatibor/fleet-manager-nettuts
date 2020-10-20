import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {
  cellValue: string = "33 avn. 11.";
  constructor() { }

  ngOnInit(): void {
  }

}
