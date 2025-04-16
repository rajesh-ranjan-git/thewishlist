import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish-form',
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addNewWish = new EventEmitter<WishItem>();

  inputItemValue: string = '';

  addWish() {
    // todo: Add wish to the items array
    // clear the textbox
    this.addNewWish.emit(new WishItem(this.inputItemValue));
    this.inputItemValue = '';
  }
}
