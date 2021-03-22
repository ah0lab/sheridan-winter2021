import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngoingOutbreaksComponent } from './ongoing-outbreaks.component';

describe('OngoingOutbreaksComponent', () => {
  let component: OngoingOutbreaksComponent;
  let fixture: ComponentFixture<OngoingOutbreaksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingOutbreaksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngoingOutbreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
