import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service/movie-service';
import { Movie } from '../../models/movie';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  public movies : Movie[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _moveService : MovieService
  ) {
    this.getAllMovies();
  }

  public getAllMovies(){
    this._moveService.findAll()
    .subscribe(
      data => {
        this.movies = data;

      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

}
