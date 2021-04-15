import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  weatherData;
  cityName = new FormControl('');
  error;
  constructor(private http: HttpClient, private weatherService: WeatherService) {
  }

  spliceDate(value) {
    return value.split(' ')[0]
  }

  fetchTemperature(cityName) {
    this.weatherService.fetchApiData(cityName).subscribe(res => {
      this.weatherData = res;
      this.error = false;
    },
    (err) => {
      this.error = true;
      this.weatherData = undefined;
    });
  }

  onSubmit() {
    this.fetchTemperature(this.cityName.value);
  }
}
