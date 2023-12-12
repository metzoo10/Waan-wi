import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThieboudienePage } from './thieboudiene.page';

describe('ThieboudienePage', () => {
  let component: ThieboudienePage;
  let fixture: ComponentFixture<ThieboudienePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThieboudienePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
