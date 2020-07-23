import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clients$: Observable<any>;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.all();
  }

}
