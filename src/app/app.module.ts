import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { HomeComponent } from './home/home.component';
import { SectioncustomersComponent } from './sectioncustomers/sectioncustomers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { InpoutBarChartComponent } from './charts/inpout-bar-chart/inpout-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    SectioncustomersComponent,
    DashboardComponent,
    InpoutBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
