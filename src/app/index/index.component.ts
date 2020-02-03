import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  isLogedIn: boolean = true;


  // users: User[] = [];

  // usersURL: string = "https://jsonplaceholder.typicode.com/users";



  // getUsersFromServer() {
  //   this.http.get(this.usersURL).subscribe((response: User[]) => {
  //     this.users = response;
  //   });
  // }
  u: String = "xk"
  ngOnInit() {
    // this.getUsersFromServer();

    const currentRoute = this.route.snapshot.url[this.route.snapshot.url.length - 1];
    console.log(currentRoute);


    this.isLogedIn = localStorage.getItem('token') ? true : false;

  }
  logOut() {
     localStorage.clear();
     this.isLogedIn=false
    // this.router.navigate(['/'], { relativeTo: this.route });
  }





}

// interface User {
//   id: number;
//   name: string;
// }