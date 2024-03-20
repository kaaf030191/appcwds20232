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
				this.listUser = response.listDtoUser;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

	public delete(idUser: string): void {
		this.userService.delete(idUser).subscribe({
			next: (response: any) => {
				this.listUser = this.listUser.filter(x => x.idUser != idUser);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}