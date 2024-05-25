import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MybookingsComponent } from './pages/website/mybookings/mybookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { LoginComponent } from './pages/admin/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Search Flights'
  },
  {
    path: 'book-flight',
    component: BookFlightComponent,
    title: 'Book new Ticket'
  },
  {
    path: 'bookings',
    component: MybookingsComponent,
    title: 'My Bookings'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'airport',
        component: AirportComponent
      },
      {
        path: 'all-flights',
        component: AllFlightsComponent
      },
      {
        path: 'city',
        component: CityComponent
      },
      {
        path: 'new-flights',
        component: NewFlightComponent
      },
      {
        path: 'all-bookings',
        component: BookingsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
