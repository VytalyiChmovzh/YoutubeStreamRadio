import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NonauthGuard} from './guards/nonauth.guard';
import {LandingComponent} from './components/landing/landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}

export const authProviders = [
    AuthGuard,
    NonauthGuard
];
