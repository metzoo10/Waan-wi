import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatayaPage } from './fataya.page';

describe('FatayaPage', () => {
  let component: FatayaPage;
  let fixture: ComponentFixture<FatayaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FatayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
