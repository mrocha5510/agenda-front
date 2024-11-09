import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContactoDialogComponent } from './agregar-contacto-dialog.component';

describe('AgregarContactoDialogComponent', () => {
  let component: AgregarContactoDialogComponent;
  let fixture: ComponentFixture<AgregarContactoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarContactoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarContactoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
