import { Routes } from '@angular/router';
import { FirstGrading } from './first-grading/first-grading';
import { Midterm } from './midterm/midterm';
import { Finals } from './finals/finals';
import { About } from './about/about';

export const routes: Routes = [
    {path: '', redirectTo: 'first-grading', pathMatch: 'full'},
    {path: 'first-grading', component: FirstGrading},
    {path: 'midterms', component:Midterm},
    {path: 'finals', component:Finals},
    {path: 'about', component:About}
];
