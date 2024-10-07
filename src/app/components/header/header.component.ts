import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, Input, ViewChild, viewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieSearchService } from '../movie-search.service';
import { JsonPipe } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MovieDetailsComponent } from "../../movie-details/movie-details.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, JsonPipe, MovieListComponent, MovieDetailsComponent,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnInit{

  @ViewChild('myInput', { static: false }) myInput!: ElementRef;  // ViewChild to access the input element
  searchVal: string = "";                      // To store the search input value
  movies: any[] = [];                          // Array to store fetched movies
  selectedMovie:any=null;
  currentPage: number = 1;

  constructor(private movieService: MovieSearchService,private router: Router) {}
  ngOnInit(): void {
    this.loadMovies();
  }


  ngAfterViewInit(): void {
    // Listen for the keyup event on the input field
    fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),       // Extract input value
      debounceTime(500),                             // Wait 500ms after user stops typing
      distinctUntilChanged(),                        // Only emit if the value is different from the previous value
    ).subscribe(searchValue => {
      this.searchVal = searchValue;  // Store the search value in the component

      if (this.searchVal.length > 2) {  // Only trigger search if input length is greater than 2 characters
        this.movieService.searchMovies(this.searchVal).subscribe(response => {
          this.movies = response.results;  // Store the movie results
          console.log('Movies:', this.movies);  // Log the movie results
        });

      } else {
        this.movies = [];  // Clear movies list if input is too short
        this.loadMovies();
      }
    });
  }

// Handle movie selection from MovieListComponent
onMovieSelected(movie: any) {
  console.log('Selected Movie:', movie); // Log the selected movie for debugging
  this.selectedMovie = movie;  // Set the selected movie
}



loadMovies() {
  {
    this.movieService.getDiscoverMovies(this.currentPage).subscribe(
      (response) => {
        this.movies = response.results;
        console.log(this.movies); // Log the data for verification
      },
      (error) => {
        console.error('Error fetching discover movies:', error);
      }
    );
  }
}

wish() {
  this.router.navigate(['/wishlist']);
  }
  home() {
    this.router.navigate(['/movies']);
    }


}
