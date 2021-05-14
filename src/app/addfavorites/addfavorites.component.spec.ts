import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfavoritesComponent } from './addfavorites.component';

describe('AddfavoritesComponent', () => {
  let component: AddfavoritesComponent;
  let fixture: ComponentFixture<AddfavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
