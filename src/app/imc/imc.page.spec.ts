import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCPage } from './imc.page';

describe('IMCPage', () => {
  let component: IMCPage;
  let fixture: ComponentFixture<IMCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
