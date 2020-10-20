import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    drivers: [
      { key: 'id', text: '#' },
      { key: 'name', text: 'Name' },
      { key: 'email', text: 'Email' },
      { key: 'phone', text: 'Phone' },
      { key: 'city', text: 'City' },
      { key: 'address', text: 'Address' }
    ],
    vehicles: [
        {key: "id", text: "#"},
        {key: "lp", text: "LP"},
        {key: "year", text: "Year"},
        {key: "manufacturer", text: "Man."},
        {key: "consumption", text: "Cons."},
        {key: "engine", text: "Eng."}
    ],
    fuelings: [
        { key: "id", text: "#"},
        { key: "vehicles", text: "Vehicles"},
        { key: "driver", text: "Driver"},
        { key: "amount", text: "Amount"},
        { key: "date", text: "Date"}
    ]
  }

  constructor() { }
}
