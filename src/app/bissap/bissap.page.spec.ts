import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BissapPage } from './bissap.page';

describe('BissapPage', () => {
  let component: BissapPage;
  let fixture: ComponentFixture<BissapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BissapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
