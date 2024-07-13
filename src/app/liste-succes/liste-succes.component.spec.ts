import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSuccesComponent } from './liste-succes.component';

describe('ListeSuccesComponent', () => {
  let component: ListeSuccesComponent;
  let fixture: ComponentFixture<ListeSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSuccesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
