/* Angular */
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http'

/* Routing  */
import { AppRoutingModule } from './app-routing.module'

/* Components */
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { AboutComponent } from './components/about/about.component'

/* Angular Material */
import { MatMenuModule } from '@angular/material/menu/'
import { MatButtonModule, } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { WeatherComponent } from './components/weather/weather.component'
import { ContactComponent } from './components/contact/contact.component'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider';

/* Platform Browser */
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


/* ngx - Translate */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        WeatherComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
