import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  cols: {key: string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Address'},

  ]
  constructor() { }


  ngOnInit(): void {
  }

  onUpdate($event): void{
    alert("Clicked on update.");
  }

  onDelete( $event): void{
    alert(`Clicked on ${$event}.`);
  }
}
