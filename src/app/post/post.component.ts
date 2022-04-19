import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  // styleUrls: ['./app.component.css']
})
export class PostComponent implements OnInit {
  title = 'post';
  data : postInfo[] = [];

  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.getPosts()
    .subscribe(res => {
      // console.log(JSON.stringify(res));
      this.data = res;
      console.log('data =>' + JSON.stringify(res));
    })
  }
  
}

export interface postInfo {
  id: any;
  userId: string;
  title: string;
  body: string;
  invoices: any;
}
