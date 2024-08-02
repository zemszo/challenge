import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TokenService {

    url = '/connect/token';

    constructor(private http: HttpClient) { }

    getToken(client: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        let body = new URLSearchParams();
        body.set("grant_type", "client_credentials");
        body.set("client_id", client.id);
        body.set("client_secret", client.secret);
        body.set("scope", "api");
        this.http.post(this.url, body, {
            headers: headers
        }).subscribe((token: any) => {
            localStorage.setItem('token', JSON.stringify(token));
        });
    }
}
