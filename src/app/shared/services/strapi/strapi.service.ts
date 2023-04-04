import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  env = environment;
  constructor(private http: HttpClient) { }

  get (url: string, page?: number, size?: number) {
    let params = {};

    if (page != undefined && size != undefined) {
      params = {
        page,
        size
      };
    }

    return this.http.get(this.env.strapiUrl + url, { params });
  }

  post (url: string, payload: any) {
    return this.http.post(this.env.strapiUrl + url, payload);
  }

  put (url: string, payload: any) {
    return this.http.put(this.env.strapiUrl + url, payload);
  }

  delete (url: string) {
    return this.http.delete(this.env.strapiUrl + url);
  }
}
