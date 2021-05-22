import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<UserModel[]>;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  public goToUser( userId: string ) : void {
    this.router.navigate(['users', userId]);
  }

}
