import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsPageComponent } from './sms-page.component';

describe('SmsPageComponent', () => {
  let component: SmsPageComponent;
  let fixture: ComponentFixture<SmsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
