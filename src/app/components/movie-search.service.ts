import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  private apiKey: string = '41fdbc510b9064d89799b25aa01c62a3';
  private apiUrl: string = 'https://api.themoviedb.org/3';

  movies:any;

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}&language=en-US&page=1`;
    // this.movies=this.http.get(url);

    return this.http.get(url)
  }

   // Method to get details of a movie by ID
  //  getMovieDetails(id: number): Observable<any> {
  //   const url = `${this.apiUrl}/find/${id}?api_key=${this.apiKey}&language=en-US`;

  // }
  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
  getDiscoverMovies(page: number = 1): Observable<any> {
    const url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`;
    return this.http.get(url);;

  }

}
