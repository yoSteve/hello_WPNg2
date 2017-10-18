import { CrewMember } from './../crew-member.model';
import { CrewMembersService } from './../crew-members.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.css']
})
export class CrewMemberComponent implements OnChanges {
  @Input() crewId:number;
  crewMember:CrewMember;
  defaultFeaturedImage = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-166536.jpg';

  constructor(private crewService:CrewMembersService) { }

  ngOnChanges() {
    if (this.crewId) {
      this.crewService.getCrewMember(this.crewId)
      .subscribe(res => {
        this.crewMember = res;
        let featured_media = res.featured_media;
        // console.log(this.crewMember);
      });
    }
  }

}
