import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { HomeComponent } from './views/layout/home/home.component';
import { LoginDirective } from './services/auth/login.directive';
import { AuthService } from './services/auth/auth.service';
import { ServicesComponent } from './views/services/services.component';
import { SearchComponent } from './views/search/search.component';
import { HomedashComponent } from './views/dashboard/homedash/homedash.component';
import { DheaderComponent } from './views/dashboard/dheader/dheader.component';
import { DbookingComponent } from './views/dashboard/dbooking/dbooking.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { DashSharedModule } from 'projects/dashboard/src/app/app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from './services/translation/translate.pipe';
import { DataService } from './services/dataStore/data.service';
import { JsonttransPipe } from './services/translation/jsonttrans.pipe';
import { ServiceComponent } from './views/service/service.component';
import { FaqComponent } from './views/faq/faq.component';

export function jokesProviderFactory(provider: DataService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginDirective,
    ServicesComponent,
    SearchComponent,
    HomedashComponent,
    DheaderComponent,
    DbookingComponent,
    TranslatePipe,
    JsonttransPipe,
    ServiceComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule ,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashSharedModule.forRoot()
  ],
  providers: [AuthService,TranslatePipe,DataService
    , 
    { provide: APP_INITIALIZER, useFactory: jokesProviderFactory, deps: [DataService], multi: true }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
