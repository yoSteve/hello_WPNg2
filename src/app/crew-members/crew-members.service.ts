import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CrewMember } from './crew-member.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CrewMembersService {
  private siteName = 'http://localhost/wordpress';
  private postUrl = `${this.siteName}/wp-json/wp/v2/`

  constructor(private http:Http) { }

  getCrewMembers(): Observable<CrewMember[]> {
    return this.http
      .get(this.postUrl + 'crew_member' + '?orderby=title&order=asc')
      .map(res => res.json());
  }

  getCrewMember(id): Observable<any> {
    return this.http
      .get(this.postUrl + 'crew_member/' + id)
      .map(res => res.json());
  }

}
