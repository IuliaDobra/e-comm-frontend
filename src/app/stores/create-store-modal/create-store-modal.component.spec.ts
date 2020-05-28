import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoreModalComponent } from './create-store-modal.component';

describe('CreateStoreModalComponent', () => {
  let component: CreateStoreModalComponent;
  let fixture: ComponentFixture<CreateStoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
