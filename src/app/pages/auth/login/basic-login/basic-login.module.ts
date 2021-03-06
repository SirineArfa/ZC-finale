import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-Login.component';
import {BasicLoginRoutingModule} from './basic-Login-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    SharedModule
  ],
  declarations: [BasicLoginComponent]
})
export class BasicLoginModule { }
