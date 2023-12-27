import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing-module';


@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [
    CommonModule, 
    RoutingModule, 
    SharedModule
  ],
})
export class PagesModule {}
