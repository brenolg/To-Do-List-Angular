import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoInputAddItens } from './to-do-input-add-itens';

describe('ToDoInputAddItens', () => {
  let component: ToDoInputAddItens;
  let fixture: ComponentFixture<ToDoInputAddItens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoInputAddItens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoInputAddItens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
