import { Component } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }
  removeMovie(movie:any) {
    this.wishlistService.removeFromWishlist(movie);
    this.wishlist = this.wishlistService.getWishlist();
    }
}
