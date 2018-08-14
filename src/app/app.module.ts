import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ReorderComponent } from './reorder/reorder.component';
import { DiaryComponent } from './diary/diary.component';
import { FuelingsComponent } from './fuelings/fuelings.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { UtcDatepickerModule } from 'angular-utc-datepicker';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    ReorderComponent,
    DiaryComponent,
    FuelingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule, FormsModule,
    UtcDatepickerModule, MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
