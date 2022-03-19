import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { IComponent }        from './model/components.model';
import { DataService }       from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public components: Observable<IComponent[]>;

  constructor(private dataSrv: DataService) {}

  public ngOnInit(){
    this.components = this.dataSrv.getMenuOpts();
  }
}
