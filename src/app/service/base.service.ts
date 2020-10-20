import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  data = {
    drivers: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "+203456987",
        city: "LA",
        address: "Apple srt. 43",
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

