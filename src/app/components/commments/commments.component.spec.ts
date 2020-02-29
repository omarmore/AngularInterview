import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmentsComponent } from './commments.component';

describe('CommmentsComponent', () => {
  let component: CommmentsComponent;
  let fixture: ComponentFixture<CommmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
