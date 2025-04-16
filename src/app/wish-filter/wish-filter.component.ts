import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter: any = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
