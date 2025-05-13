import { Routes } from '@angular/router';
import { Temp2Component } from './temp2/temp2.component';
import { Temp3Component } from './temp3/temp3.component';
import { Temp4Component } from './temp4/temp4.component';
import { Temp5Component } from './temp5/temp5.component';
import { Temp6Component } from './temp6/temp6.component';
import { Temp1Component } from './temp1/temp1.component';
import { Temp7Component } from './temp7/temp7.component';
import { Temp8Component } from './temp8/temp8.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
    {path: 'temp1' , component:Temp1Component},
    {path: 'temp2' , component:Temp2Component},
    {path: 'temp3' , component:Temp3Component},
    {path: 'temp4' , component:Temp4Component},
    {path: 'temp5' , component:Temp5Component},
    {path: 'temp6' , component:Temp6Component},
    {path: 'temp7' , component:Temp7Component},
    {path: 'temp8' , component:Temp8Component},
    {path: 'team' , component: TeamComponent},
    {path: 'home' , component:HomeComponent},
    {path: 'start' , component:StartComponent},
    { path: '' , 
        redirectTo: '/home',
        pathMatch: 'full'}
];
