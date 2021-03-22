import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'School Case Summary', url: '/folder/SchoolSummary', icon: 'list' },
    { title: 'Status of Ontario', url: '/folder/CaseStatus', icon: 'information' },
    { title: 'Ongoing Outbreaks', url: '/folder/Outbreaks', icon: 'alert' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
