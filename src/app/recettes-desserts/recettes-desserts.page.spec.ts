import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecettesDessertsPage } from './recettes-desserts.page';

describe('RecettesDessertsPage', () => {
  let component: RecettesDessertsPage;
  let fixture: ComponentFixture<RecettesDessertsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecettesDessertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
