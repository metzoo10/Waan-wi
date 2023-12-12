import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecettesPlatsPage } from './recettes-plats.page';

describe('RecettesPlatsPage', () => {
  let component: RecettesPlatsPage;
  let fixture: ComponentFixture<RecettesPlatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecettesPlatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
