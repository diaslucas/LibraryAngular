import { Http, Headers, Response } from "@angular/http";
import { UserComponent } from "./user.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:52637/api/users';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    add(user: UserComponent): Observable<Response> {

        return this.http.post(this.url, JSON.stringify(user), { headers: this.headers });

    }

    update(user: UserComponent): Observable<Response> {

        return this.http.put(this.url + "/update", JSON.stringify(user), { headers: this.headers });

    }

    delete(user: UserComponent) {

        return this.http.post(this.url + "/delete", JSON.stringify(user), { headers: this.headers });

    }

    getList(): Observable<UserComponent[]> {

        return this.http.get(this.url).map(response => response.json());

    }

    getById(id: number): Observable<UserComponent> {

        return this.http.get(this.url + '/' + id).map(response => response.json());

    }


}