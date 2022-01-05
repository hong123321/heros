import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchheroComponent } from './searchhero.component';

describe('SearchheroComponent', () => {
  let component: SearchheroComponent;
  let fixture: ComponentFixture<SearchheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
