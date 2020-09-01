import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { formatDate } from '@angular/common'
import { TranslateService } from '@ngx-translate/core'
import { WeatherapiService } from '../../services/weatherAPIService/weatherapi.service'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

    public weatherSearchForm: FormGroup
    public todayData: any
    public forecastData: any

    public lat: any
    public lon: any

    today = new Date()
    todaysDataTime = ''

    constructor(private formBuilder: FormBuilder,
        private weatherapi: WeatherapiService,
        translate: TranslateService) {

        translate.setDefaultLang('en');
        translate.use('en');
        this.todaysDataTime = formatDate(this.today, 'hh:mm a', 'en-US')
    }

    ngOnInit(): void {
        this.weatherSearchForm = this.formBuilder.group({
            location: ['']
        })
    }

    openWeatherRequest(form) {
        this.weatherapi.getOpenWeather(form.location).subscribe(response => {
            this.todayData = response
            console.log(response)

            var coordinates = Object.values(response)[0]
            this.lat = coordinates.lat
            this.lon = coordinates.lon
            this.openForecastRequest(this.lat, this.lon)
        })
    }

    openForecastRequest(lat, lon) {
        this.weatherapi.getOpenForecast(lat, lon).subscribe(response => {
            this.forecastData = response
            console.log(response)
        })
    }
}
