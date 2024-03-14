import { Component } from '@angular/core';
import { UserService } from '../../../api/user.service';

@Component({
	selector: 'user-get-all',
	templateUrl: './get-all.component.html',
	styleUrl: './get-all.component.css'
})

export class UserGetAllComponent {
	listUser: any[] = [];

	constructor(
		private userService: UserService
	) {}

	ngOnInit() {
		this.userService.getAll().subscribe({
			next: (response: any) => {
				console.log(response);
			},
			error: (error: any) => {
				console.log(error);
			}
		});

		this.listUser = [
			{
				dni: '77777777',
				userName: 'kaaf030191',
				firstName: 'Kevin Arnold',
				surName: 'Arias Figueroa',
				birthDate: '03-01-1991',
				gender: true,
				registerDate: new Date(),
				modificationDate: new Date()
			},
			{
				dni: '88888888',
				userName: 'karla123',
				firstName: 'Karla',
				surName: 'Sarmiento Aranibar',
				birthDate: '08-02-1995',
				gender: false,
				registerDate: new Date(),
				modificationDate: new Date()
			}
		];
	}
}