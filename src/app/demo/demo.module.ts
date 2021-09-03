import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

@NgModule({
  declarations: [
    DemoComponent,
    ContentProjectionComponent,
    MyCounterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule {

}
