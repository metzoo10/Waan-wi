import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KandiaPage } from './kandia.page';

describe('KandiaPage', () => {
  let component: KandiaPage;
  let fixture: ComponentFixture<KandiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KandiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
