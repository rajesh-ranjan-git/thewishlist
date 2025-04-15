import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];
  title = 'The Wishlist App';

  inputItemValue = '';

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  handleInputChange(e: any) {
    this.inputItemValue = e.target.value;
  }

  addWish() {
    // todo: Add wish to the items array
    // clear the textbox
    this.items.push(new WishItem(this.inputItemValue));
    this.inputItemValue = '';
  }
}
