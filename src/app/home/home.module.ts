import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component'
import { HomeRoutingModule } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


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
