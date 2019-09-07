import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';



const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/chart', pathMatch: 'full' },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
