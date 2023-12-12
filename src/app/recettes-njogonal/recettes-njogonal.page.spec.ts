import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecettesNjogonalPage } from './recettes-njogonal.page';

describe('RecettesNjogonalPage', () => {
  let component: RecettesNjogonalPage;
  let fixture: ComponentFixture<RecettesNjogonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecettesNjogonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
