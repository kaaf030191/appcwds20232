import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UserService } from '../../../api/user.service';

@Component({
	selector: 'user-insert',
	templateUrl: './insert.component.html',
	styleUrl: './insert.component.css'
})

export class UserInsertComponent {
	frmInsertUser: UntypedFormGroup;

	get usernameFb() { return this.frmInsertUser.controls['username']; }
	get passwordFb() { return this.frmInsertUser.controls['password']; }
	get firstNameFb() { return this.frmInsertUser.controls['firstName']; }
	get surNameFb() { return this.frmInsertUser.controls['surName']; }
	get dniFb() { return this.frmInsertUser.controls['dni']; }
	get birthDateFb() { return this.frmInsertUser.controls['birthDate']; }
	get genderFb() { return this.frmInsertUser.controls['gender']; }

	constructor(
		public formBuilder: UntypedFormBuilder,
		private userService: UserService
	) {
		this.frmInsertUser = this.formBuilder.group({
			username: [null, []],
			password: [null, []],
			firstName: [null, []],
			surName: [null, []],
			dni: [null, []],
			birthDate: [null, []],
			gender: [null, []]
		});
	}

	private leftPad(str: string, length: number, padChar: string): string {
		return (Array(length).fill(padChar).join('') + str).slice(-length);
	}

	public sendFrmInsertUser(): void {
		let formData = new FormData();

		formData.append("dtoUser.username", this.usernameFb.value);
		formData.append("dtoUser.password", this.passwordFb.value);
		formData.append("dtoUser.firstName", this.firstNameFb.value);
		formData.append("dtoUser.surName", this.surNameFb.value);
		formData.append("dtoUser.dni", this.dniFb.value);
		formData.append("dtoUser.birthDate", `${this.birthDateFb.value.year}-${this.leftPad(this.birthDateFb.value.month, 2, '0')}-${this.leftPad(this.birthDateFb.value.day, 2, '0')}`);
		formData.append("dtoUser.gender", this.genderFb.value);

		this.userService.insert(formData).subscribe({
			next: (response: any) => {
				console.log(response);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}