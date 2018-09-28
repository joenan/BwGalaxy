import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = '/api/galaxy';

  constructor(private http: HttpClient) {
  }

  getUserDetails(username, password) {
    console.log(username +  ' ' + password)
    return this.http.get(this.baseUrl + '/auth/user/?username=' + username + '&password=' + password);
  }
}
