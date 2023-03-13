/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryLocationComponent } from './queryLocation.component';

describe('QueryLocationComponent', () => {
  let component: QueryLocationComponent;
  let fixture: ComponentFixture<QueryLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
