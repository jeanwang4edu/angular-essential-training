import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        MediaItemFormComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
