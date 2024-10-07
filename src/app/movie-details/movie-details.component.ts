import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieSearchService } from '../components/movie-search.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit,AfterViewInit{
goBack() {
throw new Error('Method not implemented.');
}
  @Input() movies: any[] = [];
  movie: any;
  movieID:any;
  constructor(private route: ActivatedRoute, private movieService: MovieSearchService,private router: Router) {}
  ngAfterViewInit(): void {
     // Extract the movie ID from the route, and convert it to a number
     this.movieID = +this.route.snapshot.paramMap.get('id')!;
     this.movie = history.state.movie;
     console.log("movieId:",this.movie );
  }



  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.movie = params;
    //   console.log(this.movie);// Access query parameters as an object
    // });




//   getMovieDetails(id: string) {
//     this.movieService.getMovieById(id).subscribe((response) => {
//       this.movie = response; // Assign the response to the movie variable
//       console.log('Movie Details:', this.movie); // Log the movie details to check
//     });
//   }
//   goBack() {
//     this.router.navigate(['/movies']);
// }
}}
