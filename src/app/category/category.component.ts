import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  users: User[] = [];

  usersURL: string = "https://jsonplaceholder.typicode.com/users";

  ind:any=5;
 

  getUsersFromServer() {
    this.http.get(this.usersURL).subscribe((response: User[]) => {
      for(let i=this.ind;i<this.ind+5;i++){
        this.users[i] = response[i];
      
      }
    });
  }

  ngOnInit() {
    this.getUsersFromServer()
  }

  
 
}

interface User {
  id: number;
  name: string;
}
