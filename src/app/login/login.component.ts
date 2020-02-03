import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
   

  }

    login() {
      localStorage.setItem('token',`kk`)
    
     this.router.navigate(['/'], {relativeTo: this.route});
  }
}
