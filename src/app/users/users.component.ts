import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  client: any = { id: "", secret: "" };
  users: User[] = [];
  user: User = {};
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.users = this.usersService.getUsers();
    //console.log(this.users);
  }

  addUser() {
    this.usersService.addUser(this.user);
  }
}
