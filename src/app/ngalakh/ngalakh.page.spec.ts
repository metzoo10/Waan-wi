import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgalakhPage } from './ngalakh.page';

describe('NgalakhPage', () => {
  let component: NgalakhPage;
  let fixture: ComponentFixture<NgalakhPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NgalakhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
