import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];
  addToWishlist(movie: any) {
    this.wishlist.push(movie);
  }

  getWishlist() {
    return this.wishlist;
  }

  removeFromWishlist(movie: any) {
    this.wishlist = this.wishlist.filter((m) => m.id !== movie.id);
  }
}
