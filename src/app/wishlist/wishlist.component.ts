import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  @Input() wishes: WishItem[] = [];

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
