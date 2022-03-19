import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private $http: HttpClient) { }

  getUser(): Observable<User> {
    return this.$http.get<User>('https://jsonplaceholder.typicode.com/users');
  }
}

