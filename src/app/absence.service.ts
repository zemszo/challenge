import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, Observable, toArray } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AbsenceService {

    url = 'https://api4.allhours.com';
    absences: any;

    constructor(private http: HttpClient) { }

    getAbsences(): Observable<any> {
        const token = JSON.parse(<string>localStorage.getItem('token')).access_token;
        console.log(token);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        });
        return this.http.get<any>(this.url + "/api/v1/Absences", {
            headers: headers
        });
    }
}
