import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentt implements OnInit {
  Newform:FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.Newform=this.fb.group({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })

  }

    login() {
      console.log(this.Newform)
  }
}
