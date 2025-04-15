import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];
  title = 'The Wishlist App';

  inputItemValue: string = '';

  filteredItems: WishItem[] = this.items;

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addWish() {
    // todo: Add wish to the items array
    // clear the textbox
    this.items.push(new WishItem(this.inputItemValue));
    this.inputItemValue = '';
  }

  handleFilter(e: Event) {
    const filter = (e.target as HTMLInputElement).value;

    if (filter === '0') {
      this.filteredItems = this.items;
    } else if (filter === '1') {
      this.filteredItems = this.items.filter((item) => !item.isComplete);
    } else if (filter === '2') {
      this.filteredItems = this.items.filter((item) => item.isComplete);
    }
  }
}
