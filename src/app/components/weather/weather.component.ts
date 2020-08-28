import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { formatDate } from '@angular/common'
import { WeatherapiService } from '../../services/weatherAPIService/weatherapi.service'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

    public weatherSearchForm: FormGroup;
    public weatherData: any;

    today = new Date();
    todaysDataTime = '';

    constructor(private formBuilder: FormBuilder,
        private weatherapi: WeatherapiService) {
        this.todaysDataTime = formatDate(this.today, 'hh:mm a', 'en-US');
    }

    ngOnInit(): void {
        this.weatherSearchForm = this.formBuilder.group({
            location: ['']
        })
        this.weatherRequestFirst()

    }

    weatherRequest(form) {
        this.weatherapi.getWeather(form.location).subscribe(data => {
            this.weatherData = data
            console.log(this.weatherData)
        })
    }

    weatherRequestFirst() {
        this.weatherapi.getWeather('istanbul').subscribe(data => {
            this.weatherData = data
            console.log(this.weatherData)
        })
    }

}
