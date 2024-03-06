import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewThoughtComponent } from './create-new-thought.component';

describe('CreateNewThoughtComponent', () => {
  let component: CreateNewThoughtComponent;
  let fixture: ComponentFixture<CreateNewThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewThoughtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
