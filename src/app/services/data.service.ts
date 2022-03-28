import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User }       from '../model/user.model';
import { IComponent } from '../model/components.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private $http: HttpClient) { }

  getUser(): Observable<User> {
    return this.$http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(): Observable<IComponent[]> {
    return this.$http.get<IComponent[]>('/assets/data/menu-opts.json');
  }
}

