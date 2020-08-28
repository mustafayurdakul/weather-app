import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class WeatherapiService {

    constructor(private http: HttpClient) { }

    getWeather(location) {
        return this.http.get(`http://api.weatherstack.com/current?access_key=23d2a81f7706df3351e65a0fefda3326&query=${location}`)
    }
}
