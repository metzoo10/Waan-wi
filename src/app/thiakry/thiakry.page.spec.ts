import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThiakryPage } from './thiakry.page';

describe('ThiakryPage', () => {
  let component: ThiakryPage;
  let fixture: ComponentFixture<ThiakryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThiakryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
