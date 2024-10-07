import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: any;
  constructor(private wishlistService: WishlistService) {}

  addToWishlist() {
    this.wishlistService.addToWishlist(this.movie);
    console.log(`${this.movie.title} added to wishlist`);
  }
}
