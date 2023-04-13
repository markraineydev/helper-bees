import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './quiz/step1/step1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { Step2Component } from './quiz/step2/step2.component';
import { Step3Component } from './quiz/step3/step3.component';
import { Step4Component } from './quiz/step4/step4.component';
import { Step5Component } from './quiz/step5/step5.component';
import { SuccessComponent } from './success/success.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    SuccessComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'step1', component: Step1Component},
      {path: 'step2', component: Step2Component},
      {path: 'step3', component: Step3Component},
      {path: 'step4', component: Step4Component},
      {path: 'step5', component: Step5Component},
      {path: 'success', component: SuccessComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
