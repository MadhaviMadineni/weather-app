import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiId = '9424cae3d0e7db16bf5da99bbcfcf517';

  constructor(private http: HttpClient) { }

  fetchApiData(cityname) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&cnt=5&appid=${this.apiId}&units=metric`
    return this.http.get<any>(apiUrl)
  }
}
