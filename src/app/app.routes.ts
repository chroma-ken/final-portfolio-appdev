import { Routes } from '@angular/router';
import { FirstGrading } from './first-grading/first-grading';
import { Midterm } from './midterm/midterm';
import { Finals } from './finals/finals';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'first-grading', component: FirstGrading},
    {path: 'midterms', component:Midterm},
    {path: 'finals', component:Finals},
    {path: 'homepage', component:Homepage}
];
