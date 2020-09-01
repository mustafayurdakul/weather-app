import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class WeatherapiService {

    /* Openweather API */

    private key = "228cb83a7ae775c9c4f1f1464ccb8121"

    constructor(private http: HttpClient) { }

    getOpenWeather(location, lang) {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.key}&units=metric&lang=${lang}`)
    }

    getOpenForecast(lat, lon, lang) {
        return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric&lang=${lang}`)
    }
}
