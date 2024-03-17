import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovalCommissionComponent } from './approval-commission.component';

describe('ApprovalDetailComponent', () => {
  let component: ApprovalCommissionComponent;
  let fixture: ComponentFixture<ApprovalCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalCommissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
