// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { PostComponent } from './post/post.component';
// import { HeroComponent } from './hero/hero.component';
// import { HttpClientModule } from '@angular/common/http';
// import { PostModule } from './post/post.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     // HeroComponent,
//     // PostComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     // PostModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PostComponent } from './post/post.component';
import { HeroComponent } from './hero/hero.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    PostComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

