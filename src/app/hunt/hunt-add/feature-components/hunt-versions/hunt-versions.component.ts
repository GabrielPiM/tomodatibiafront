import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hunt-versions',
  templateUrl: './hunt-versions.component.html',
  styleUrls: ['./hunt-versions.component.css'],
})
export class HuntVersionsComponent implements OnInit {
  clients: ClientVersion[] = [];

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(
    //   (data) => console.log(data),
    //   (error) => console.log(error)
    // );
    // console.log(JSON.parse(String(this.clients)));
  }

  ngOnInit(): void {
    this.getJSON();

    // this.clients.push({ id: 1, idClientVersion: 1, name: 'x' });
    this.clients.push({ id: 1, idClientVersion: 1, name: 'y' });

    console.log('ids');
    for (let index = 0; index < this.clients.length; index++) {
      console.log(this.clients[index].id + ' x');
    }

    console.log('all');
    console.log(this.clients);
  }

  public getJSON(): void {
    this.http.get('assets/class-maps/clients.json').subscribe(
      (data) => Array.prototype.push.apply(this.clients, <ClientVersion[]>data),

      // data=>console.log(data),
      (error) => console.log(error)
    );
  }
}

export interface ClientVersion {
  id: number;
  idClientVersion: number;
  name: string;
}
