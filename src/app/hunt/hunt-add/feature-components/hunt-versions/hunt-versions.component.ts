import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  @Output() clientVersionEvent = new EventEmitter<ClientVersion>();

  setVersion(id: number) {
    let version = this.clients.find((c) => c.idClientVersion == id);
    version!.check = !version?.check;
  }

  ngOnInit(): void {
    this.getJSON();

    console.log(this.clients);
  }

  public getJSON(): void {
    this.http.get('assets/class-maps/clients.json').subscribe(
      (data) => Array.prototype.push.apply(this.clients, <ClientVersion[]>data),

      (error) => console.log(error)
    );
  }
}

export interface ClientVersion {
  id: number;
  idClientVersion: number;
  name: string;
  check: boolean;
}
