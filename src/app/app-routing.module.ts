import { CrewMemberComponent } from './crew-members/crew-member/crew-member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CrewListComponent } from './crew-members/crew-list/crew-list.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'wordpress',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'crew',
    component: CrewListComponent,
    pathMatch: 'full'
  },
  {
    path: 'crew/:id',
    component: CrewMemberComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})

export class WpNg2RoutingModule {}
