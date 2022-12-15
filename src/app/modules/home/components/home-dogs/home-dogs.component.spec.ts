import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDogsComponent } from './home-dogs.component';

describe('HomeDogsComponent', () => {
  let component: HomeDogsComponent;
  let fixture: ComponentFixture<HomeDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
