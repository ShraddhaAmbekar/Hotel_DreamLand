import { AboutsectionRoutingModule } from './../aboutsection/aboutsection-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AboutsectionRoutingModule,
  
  ],
  exports:[FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AboutsectionRoutingModule]
})
export class SharedModule {}
