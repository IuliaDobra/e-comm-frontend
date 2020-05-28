import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreModalComponent } from './edit-store-modal.component';

describe('StoreModalComponent', () => {
  let component: EditStoreModalComponent;
  let fixture: ComponentFixture<EditStoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
