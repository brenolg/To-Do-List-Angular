import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDeleteAll } from './to-do-delete-all';

describe('ToDoDeleteAll', () => {
  let component: ToDoDeleteAll;
  let fixture: ComponentFixture<ToDoDeleteAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDeleteAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoDeleteAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
