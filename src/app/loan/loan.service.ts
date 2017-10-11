import { Http, Headers, Response } from "@angular/http";
import { LoanComponent } from "./loan.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class LoanService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:52637/api/loans';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    add(loan: LoanComponent): Observable<Response> {

        return this.http.post(this.url, JSON.stringify(loan), { headers: this.headers });

    }

    update(loan: LoanComponent): Observable<Response> {

        return this.http.put(this.url + "/update", JSON.stringify(loan), { headers: this.headers });

    }

    delete(loan: LoanComponent) {

        return this.http.post(this.url + "/delete", JSON.stringify(loan), { headers: this.headers });

    }

    getList(): Observable<LoanComponent[]> {

        return this.http.get(this.url).map(response => response.json());

    }

    getById(id: number): Observable<LoanComponent> {

        return this.http.get(this.url + '/' + id).map(response => response.json());

    }


}