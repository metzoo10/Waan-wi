import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeignetsPage } from './beignets.page';

describe('BeignetsPage', () => {
  let component: BeignetsPage;
  let fixture: ComponentFixture<BeignetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeignetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
