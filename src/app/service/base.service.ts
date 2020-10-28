import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverUrl: string =  "http://localhost:3000/";

  data = {
    drivers: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "+203456987",
        city: "la",
        address: "Apple srt. 43",
      },
      {
        id: 2,
        name: "Jack Idol",
        email: "jack.idol@gmail.com",
        phone: "+303456987",
        city: "bp",
        address: "Orange srt. 10",
      },
      {
        id: 3,
        name: "Charlie Filpo",
        email: "charlie.filpo@gmail.com",
        phone: "+703456987",
        city: "bp",
        address: "33th srt. 10",
      }
    ],
    vehicles: [
      {
        id: 1,
        lp: "GOD-258",
        year: 2015,
        manufacturer: "VW",
        consumption: 7,
        engine: "diesel",
      }
    ],
    fuelings: [
      {
        id: 1,
        vehicles: 1,
        driver: 1,
        amount: 40,
        date: "2020-04-02",
      }
    ]
  }

  constructor() { }

  getAll(dataType: string): any[]{
    return this.data[dataType];
  }
}

