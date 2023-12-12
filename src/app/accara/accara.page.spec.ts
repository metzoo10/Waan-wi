import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccaraPage } from './accara.page';

describe('AccaraPage', () => {
  let component: AccaraPage;
  let fixture: ComponentFixture<AccaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
