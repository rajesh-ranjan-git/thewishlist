import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    FormsModule,
    WishlistComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  title = 'The Wishlist App';

  filter: any = () => {};
}
