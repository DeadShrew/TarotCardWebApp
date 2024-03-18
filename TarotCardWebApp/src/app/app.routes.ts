import { Routes } from '@angular/router';
import { SingleCardReadingComponent } from './pages/single-card-reading/single-card-reading.component';
import { HomeComponent } from './pages/home/home.component';
import { PastPresentFutureComponent } from './pages/past-present-future/past-present-future.component';
import { CrossReadingComponent } from './pages/cross-reading/cross-reading.component';
import { CardInformationComponent } from './pages/card-information/card-information.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'single-card-reading',
        component:SingleCardReadingComponent,
    },
    {
        path:'past-present-future',
        component:PastPresentFutureComponent,
    },
    {
        path:'cross-reading',
        component:CrossReadingComponent,
    },
    {
        path:'card-information',
        component:CardInformationComponent,
    },
    {
        path:'card-details/:id',
        component:CardDetailsComponent,
    },
];
