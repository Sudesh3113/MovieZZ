import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WishListComponent } from './wish-list/wish-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },

  // Route to show the movie list component
  { path: 'movies', component: MovieListComponent,children: [
      { path: 'movies/:id', component: MovieDetailsComponent },
      { path: 'wishlist', component: WishListComponent }
    ]
  },


  // // Route to show the movie details for a selected movie (based on the ID)
  // { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'wishlist', component: WishListComponent},
  // Fallback for invalid routes
  { path: '**', redirectTo: 'movies' }
];
