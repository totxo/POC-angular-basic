import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get('http://localhost:3302/users')
      .pipe(
        map( (response: UserModel[]) => response ),
        catchError( (error) => {
          throw new Error('error in getUsers(). Details: ' + error.message );
        })
      );
  }
}
