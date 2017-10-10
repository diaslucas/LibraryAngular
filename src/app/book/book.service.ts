import { Http, Headers, Response } from "@angular/http";
import { BookComponent } from "./book.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class BookService{

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:52637/api/books';

    constructor(http: Http){

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    add(book: BookComponent):Observable<Response>{

        return this.http.post(this.url, JSON.stringify(book), { headers: this.headers });

    }

    update(book: BookComponent):Observable<Response>{

        return this.http.put(this.url + "/update", JSON.stringify(book), {headers: this.headers});

    }

    delete(book: BookComponent){

        return this.http.post(this.url + "/delete", JSON.stringify(book), { headers: this.headers });

    }

    getList(): Observable<BookComponent[]>{

        return this.http.get(this.url).map(response => response.json());

    }

    getById(id: number): Observable<BookComponent>{

        return this.http.get(this.url + '/' + id).map(response => response.json());

    }

}