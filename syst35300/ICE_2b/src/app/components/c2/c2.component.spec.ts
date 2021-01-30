import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { C2Component } from './c2.component';

describe('C2Component', () => {
  let component: C2Component;
  let fixture: ComponentFixture<C2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
