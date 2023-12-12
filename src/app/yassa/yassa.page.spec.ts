import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YassaPage } from './yassa.page';

describe('YassaPage', () => {
  let component: YassaPage;
  let fixture: ComponentFixture<YassaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YassaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
