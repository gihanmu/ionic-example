import { Injectable , Inject} from '@angular/core';
import { DataService } from '../data-service/data-service';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Movie } from '../../models/movie';

@Injectable()
export class MovieService extends DataService {
  private endPointUri = '/movies';

  constructor(
    @Inject(Http) http: Http
  ) {
    super(http);
   }


   findAll() {
    const url = `${this._baseUrl}${this.endPointUri}`;
    return this.doGetRequest(url, {}, true)
        .map((res: Response) => {
            return <Movie[]>res.json();
        })
        .catch((error: Response | any) => {
            return Observable.throw(error);
        });
  }

  save(data: Movie) {
    let url = `${this._baseUrl}${this.endPointUri}`;    
    return this.doPostRequest(url, data)
        .map((res: Response) => {
            return <Movie[]>res.json();
        })
        .catch((error: Response | any) => {
            return Observable.throw(error);
        });
  }

  delete(task : Movie){
    let url = `${this._baseUrl}${this.endPointUri}/${task.id}`;    
    return this.doDelRequest(url)
    .map((res: Response) => {
        return <Boolean>res.json();
    })
    .catch((error: Response | any) => {
        return Observable.throw(error);
    });
  }

  update(task : Movie){
    let url = `${this._baseUrl}${this.endPointUri}/${task.id}`;    
    return this.doPutRequest(url, task)
    .map((res: Response) => {
        return <Boolean>res.json();
    })
    .catch((error: Response | any) => {
        return Observable.throw(error);
    });
  }

}
