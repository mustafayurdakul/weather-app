import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { formatDate } from '@angular/common'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'
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
    public lang

    public lat: any
    public lon: any

    today = new Date()
    todaysDataTime = ''

    constructor(private formBuilder: FormBuilder,
        private weatherapi: WeatherapiService,
        private translate: TranslateService) {

        translate.setDefaultLang('en');
        translate.use('en');

        this.todaysDataTime = formatDate(this.today, 'hh:mm a', 'en-US')
    }

    ngOnInit(): void {
        this.weatherSearchForm = this.formBuilder.group({
            location: ['']
        })

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.lang = event.lang
        });
    }

    openWeatherRequest(form, lang = this.lang) {
        this.weatherapi.getOpenWeather(form.location, lang).subscribe(response => {
            this.todayData = response
            console.log(response)

            var coordinates = Object.values(response)[0]
            this.lat = coordinates.lat
            this.lon = coordinates.lon
            this.openForecastRequest(this.lat, this.lon, lang)
        })
    }

    openForecastRequest(lat, lon, lang = this.lang) {
        this.weatherapi.getOpenForecast(lat, lon, lang).subscribe(response => {
            this.forecastData = response
            console.log(response)
        })
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }

}
