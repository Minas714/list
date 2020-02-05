import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogedIn=false;
  Newform:FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.Newform= new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })

  }

    login() {
      localStorage.setItem("token","yjfyufjygfjfjf")
      
      this.router.navigate(['/'], { relativeTo: this.route });
      console.log(this.Newform)
  }

}
