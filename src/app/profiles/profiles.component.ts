import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfilesService} from '../profiles.service';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: any;
  constructor(public ps: ProfilesService, public router: Router) { }


  ngOnInit() {
    this.profiles = this.ps.getProfiles();
    console.log(this.profiles)
  }

  singleProfile(id) {
    console.log(id);
    this.router.navigate(['profiles', id])
  }
}
