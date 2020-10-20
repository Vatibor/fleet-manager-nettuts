import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  deleteIconClass: string = 'fa fa-trash-o';

  cols: {key: string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Address'},

  ]
  driver: any = [];

  constructor(private baseService: BaseService) {

    setInterval( () => {
      this.deleteIconClass = this.deleteIconClass == 'fa fa-trash-o' ? 'fa fa-trash' : 'fa fa-trash-o';
    },1000);
   }


  ngOnInit(): void {
    this.driver = this.baseService.getAll('drivers')[0];
  }

  onUpdate($event): void{
    alert("Clicked on update.");
  }

  onDelete( $event): void{
    alert(`Clicked on ${$event}.`);
  }
}
