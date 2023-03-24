import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';
import { EmployerService } from './services/employer.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployerService],
  bootstrap: [EmployerComponent]
})
export class AppModule { }
