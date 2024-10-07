import { MovieSearchService } from './../movie-search.service';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor,NgIf } from '@angular/common';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from '../../movie-details/movie-details.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [HeaderComponent, NgFor, MovieCardComponent, MovieDetailsComponent,RouterOutlet],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() movies: any[] = []; // Array of movies passed from parent
  @Output() movieSelected: EventEmitter<any> = new EventEmitter();// EventEmitter to notify parent
  selectedMovie: any = null; // Holds the movie selected by the user

  constructor(private router: Router,private movieSearch:MovieSearchService) {}
  // Navigate to the movie details when a movie is selected
  selectMovie(movie: any) {
    console.log(movie);
    this.router.navigate(['/movies', movie.id]); // Navigate to movie details with movie ID in the route
  }

  // Reset the selected movie (in case you want a back navigation)
  resetSelection() {
    this.selectedMovie = null;
  }
}
