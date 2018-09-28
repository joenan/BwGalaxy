import {Component, AfterViewInit, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../task.service';
import {AuthService} from '../auth.service';


declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  username: '';
  password: '';
  data: any;

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {

  }

  loginClicked() {
    this.auth.getUserDetails(this.username, this.password).subscribe(response => {
      this.data = response;
      console.log(this.data);
      if (this.data.message === 'success') {
        this.router.navigate(['landing']);
        TaskService.pageReload = true;
      }
      else {
        console.log('Failure');
      }
    });
  }

  signOut() {

  }


  ngAfterViewInit() {
    this.ngOnInit();
  }


}
