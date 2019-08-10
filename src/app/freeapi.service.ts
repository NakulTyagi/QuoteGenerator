import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comments } from './comments';


@Injectable()
export class freeApiService {

    constructor(private httpclient: HttpClient) { }

    getcomments(): Observable<Comments[]> {
        return this.httpclient.get<Comments[]>("./assets/quote.json");

    }

}