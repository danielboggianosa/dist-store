import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SwiperModule,
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
