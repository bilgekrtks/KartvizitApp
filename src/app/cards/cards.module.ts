import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CardModalComponent } from './card-modal/card-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CardSearchComponent } from './card-search/card-search.component';
@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModalComponent,
    CardSearchComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  
})
export class CardsModule { }
