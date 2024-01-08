import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactUsComponent } from './admin-contact-us.component';
import { HttpClientModule } from '@angular/common/http';

describe('AdminContactUsComponent', () => {
  let component: AdminContactUsComponent;
  let fixture: ComponentFixture<AdminContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminContactUsComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(AdminContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
