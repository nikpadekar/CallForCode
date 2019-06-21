import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsupportComponent } from './chatsupport/chatsupport.component';
import { LostandfoundComponent } from './lostandfound/lostandfound.component';
import { LivefeedComponent } from './livefeed/livefeed.component';
import { EmergencyservicesComponent } from './emergencyservices/emergencyservices.component';
import { DonationComponent } from './donation/donation.component';
import { HelpinghandService } from './service/helpinghand.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatsupportComponent,
    LostandfoundComponent,
    LivefeedComponent,
    EmergencyservicesComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [HelpinghandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
