import { CrewMember } from './../crew-member.model';
import { CrewMembersService } from './../crew-members.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css'],
  providers: [ CrewMembersService ]
})
export class CrewListComponent implements OnInit {
  crewMembers:CrewMember[];
  activeCrewMember:number;

  constructor(private crewService:CrewMembersService) { }

  ngOnInit() {
    this.crewService.getCrewMembers()
      .subscribe(res => {
        this.crewMembers = res;
        // console.log(this.crewMembers);
      });
  }

  onClickCrew(crew) {
    this.activeCrewMember = crew.id;
  }

}
