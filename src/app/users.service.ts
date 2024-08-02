import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({ providedIn: 'root' })
export class UsersService {

    url = 'https://api4.allhours.com';
    users: User[] = [];

    constructor(private http: HttpClient) { }

    getUsers() {
        const token = JSON.parse(<string>localStorage.getItem('token')).access_token;
        console.log(token);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        });
        this.http.get(this.url + "/api/v1/Users", {
            headers: headers
        }).subscribe((users: any) => {
            users.forEach((user: any) => { this.users.push({ "id": user.id, "firstName": user.FirstName, "lastName": user.LastName, "email": user.email }) });
        });
        return this.users;
    }

    addUser(user: User) {
        const token = JSON.parse(<string>localStorage.getItem('token')).access_token;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        });
        this.http.post(this.url + "/api/v1/Users", {
            headers: headers
        }).subscribe()
    }
}
