import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatsupportComponent } from './chatsupport/chatsupport.component';
import { AppComponent } from './app.component';
import { LostandfoundComponent } from './lostandfound/lostandfound.component';
import { LivefeedComponent } from './livefeed/livefeed.component';
import { EmergencyservicesComponent } from './emergencyservices/emergencyservices.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/chatsupport',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    children:[
      {
      path : 'chatsupport',
      component: ChatsupportComponent
      },
      {
        path : 'lostandfound',
        component: LostandfoundComponent
      },
      {
        path : 'latestfeed',
        component: LivefeedComponent
      },
      {
        path : 'emergencyservices',
        component: EmergencyservicesComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
