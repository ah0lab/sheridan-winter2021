import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public displayingSchoolSummary = false;
  public displayingSchoolTesting = false;
  public displayingSchoolPartners = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  toggleSchoolInfo(dataToDisplay: string) {
    switch (dataToDisplay) {
      case 'summary': {
        this.displayingSchoolSummary = true;
        this.displayingSchoolPartners = false;
        this.displayingSchoolTesting = false;
        break;
      }
      case 'testing': {
        this.displayingSchoolSummary = false;
        this.displayingSchoolPartners = false;
        this.displayingSchoolTesting = true;
        break;
      }
      case 'partners': {
        this.displayingSchoolSummary = false;
        this.displayingSchoolPartners = true;
        this.displayingSchoolTesting = false;
        break;
      }
    }
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
