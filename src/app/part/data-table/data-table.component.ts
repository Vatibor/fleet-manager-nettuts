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

  driver: any = {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+203456987",
    city: "LA",
    address: "Apple srt. 43",
  }

  deleteIconClass: string = 'fa fa-trash-o';

  constructor() {

    setInterval( () => {
      this.deleteIconClass = this.deleteIconClass == 'fa fa-trash-o' ? 'fa fa-trash' : 'fa fa-trash-o';
    },1000);
   }


  ngOnInit(): void {
  }

  onUpdate($event): void{
    alert("Clicked on update.");
  }

  onDelete( $event): void{
    alert(`Clicked on ${$event}.`);
  }
}
