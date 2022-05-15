import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: '' | number = '';
  teams: string[][] = [];

  onInput(value: string) {
    this.newMemberName = value;
  }


  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }


  clear() {
    this.members = [];
    this.teams = [];

  }


  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
  }


  generateTeams() {
    const allMembers = [...this.members];
    this.teams = [];

    if (this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid number of teams";
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members";
      return;
    }

    this.errorMessage = "";


    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) {
          break;
        }

        if (this.teams[i]) {
          this.teams[i].push(member);
        }
        else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';

  }
}





