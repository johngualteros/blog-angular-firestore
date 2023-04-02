import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostsComponent } from './card-posts.component';

describe('CardPostsComponent', () => {
  let component: CardPostsComponent;
  let fixture: ComponentFixture<CardPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
