import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from "@angular/http";


@Injectable()
export class DataService {
  protected _http: Http = null;
  protected _baseUrl: string;

  
  constructor(
    @Inject(Http) http: Http
) {
    this._http = http;
    this._baseUrl = 'http://localhost:3000'
  
}

  public doGetRequest(url, extraHeaders: any = {},removeTenantHeader ? : boolean): any {
    return this._http.get(url, this.getRequestOptions(extraHeaders, removeTenantHeader, url));
  }

  public doPostRequest(url, params, extraHeaders: any = {},removeTenantHeader ? : boolean): any {
    return this._http.post(url, params, this.getRequestOptions(extraHeaders, removeTenantHeader, url));
  }

  public doBlobPostRequest(url, params, extraHeaders: any = {},removeTenantHeader ? : boolean): any {
    let opts = this.getRequestOptions(extraHeaders, removeTenantHeader, url);
    opts.responseType = ResponseContentType.Blob;
    return this._http.post(url, params, opts);
  }


  public doPutRequest(url, params, extraHeaders: any = {},removeTenantHeader ? : boolean): any {
    return this._http.put(url, params, this.getRequestOptions(extraHeaders, removeTenantHeader, url));
  }

  public doDelRequest(url, extraHeaders: any = {}): any {
    return this._http.delete(url, this.getRequestOptions(extraHeaders));
  }

  public getRequestOptions(extraHeaders: any = {},removeTenantHeader ? : boolean, url ? : string) {
    const headers = new Headers();
    const opts = new RequestOptions();

    for (const headerName in extraHeaders) {
      headers.append(headerName, `${extraHeaders[headerName]}`);
    }

    

    opts.headers = headers;

    return opts;
  }

}
