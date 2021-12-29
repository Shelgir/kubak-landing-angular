/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ViewCounter } from '../models/view-counter';

@Injectable({
  providedIn: 'root',
})
export class ViewCounterService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation viewCounterGet
   */
  static readonly ViewCounterGetPath = '/ViewCounter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewCounterGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewCounterGet$Response(params?: {
  }): Observable<StrictHttpResponse<ViewCounter>> {

    const rb = new RequestBuilder(this.rootUrl, ViewCounterService.ViewCounterGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ViewCounter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewCounterGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewCounterGet(params?: {
  }): Observable<ViewCounter> {

    return this.viewCounterGet$Response(params).pipe(
      map((r: StrictHttpResponse<ViewCounter>) => r.body as ViewCounter)
    );
  }

}
