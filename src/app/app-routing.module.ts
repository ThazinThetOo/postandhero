import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [

  { path: '', redirectTo: '/hero', pathMatch: 'full' },
  { path: 'post', component: PostComponent },
  { path: 'hero', component: HeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
