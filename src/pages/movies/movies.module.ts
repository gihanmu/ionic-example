import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesPage } from './movies';
import { MovieService } from '../../providers/movie-service/movie-service';
import { DataService } from '../../providers/data-service/data-service';

@NgModule({
  declarations: [
    MoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
  ],
  providers : [
    DataService,
    MovieService
  ]
})
export class MoviesPageModule {}
