import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStoreModalComponent } from './delete-store-modal.component';

describe('DeleteStoreComponent', () => {
  let component: DeleteStoreModalComponent;
  let fixture: ComponentFixture<DeleteStoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
