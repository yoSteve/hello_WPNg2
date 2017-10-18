import { PostsService } from './posts/posts.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WpNg2RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CrewMemberComponent } from './crew-members/crew-member/crew-member.component';
import { CrewListComponent } from './crew-members/crew-list/crew-list.component';
import { HeaderComponent } from './header/header.component';
import { WpTheContentPipe } from './pipes/wp-the-content.pipe';
import { SpecialCharactersPipe } from './pipes/special-characters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CrewMemberComponent,
    CrewListComponent,
    HeaderComponent,
    WpTheContentPipe,
    SpecialCharactersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WpNg2RoutingModule
  ],
  providers: [ /* PostsService */ ], // providing PostsService in PostListComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
