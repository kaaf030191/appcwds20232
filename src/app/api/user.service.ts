import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	httpOptions: any = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(
		private httpClient: HttpClient
	) {}

	public getAll(): Observable<any> {
		return this.httpClient.get<any>(`https://localhost:7140/user/getall`, this.httpOptions);
	}
}