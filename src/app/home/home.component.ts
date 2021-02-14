import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // h1Style:boolean = false;
    users: User[];

  constructor(private data: DataService) { 
    this.users = [];
  }

  ngOnInit(): void {
      // this.data.getUsers().subscribe( (data: User[]) => {
      //   this.users = data
      //   console.log(this.users)
      // })
     
    }

  firstClick(){
    // console.log('Clicked');
    this.data.getUsers();
    // if(this.h1Style){
    //   this.h1Style = false;
    // }
    // else {
    //     this.h1Style = true;
    //   }
  }
 
 
}
