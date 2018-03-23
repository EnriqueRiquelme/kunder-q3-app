import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private url = 'https://hack.kunderlabs.com/exam/telecom/api';
  private options;

  constructor(
    public http: HttpClient
  ) {
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    this.options = {headers: headers};
  }

  private getUrl(): string {
    return this.url;
  }

  public getNewProducts() {
    return this.http.get(this.getUrl() + '/products/new');
  }

}
