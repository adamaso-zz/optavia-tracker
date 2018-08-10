import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LeanAndGreenComponent } from './lean-and-green/lean-and-green.component';
import { FuelingsComponent } from './fuelings/fuelings.component';
import { DiaryComponent } from './diary/diary.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TrackerComponent },
  { path: 'leanandgreen', component: LeanAndGreenComponent },
  { path: 'fuelings', component: FuelingsComponent },
  { path: 'diary', component: DiaryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
