import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsComponent } from './admin-items.component';
import { HttpClientModule } from '@angular/common/http';

describe('AdminItemsComponent', () => {
  let component: AdminItemsComponent;
  let fixture: ComponentFixture<AdminItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminItemsComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(AdminItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
