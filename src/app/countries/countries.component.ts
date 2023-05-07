import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  MyCountries: CountryInfo[] = [];
  constructor() {
    //alert('Constructor')
   }

  ngOnInit(): void {
    //alert('Initi')
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {
           let c = new CountryInfo();
           c.name = json[i].name.common;
           c.flag = json[i].flags.png;
           c.population = json[i].population;
           this.MyCountries.push(c);
        }
      })
  }

}


class CountryInfo
{
  flag: string = '';
  name :string = '';
  population: number = 0;
}
