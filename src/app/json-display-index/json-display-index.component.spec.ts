import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDisplayIndexComponent } from './json-display-index.component';

describe('JsonDisplayIndexComponent', () => {
  let component: JsonDisplayIndexComponent;
  let fixture: ComponentFixture<JsonDisplayIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonDisplayIndexComponent]
    });
    fixture = TestBed.createComponent(JsonDisplayIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
