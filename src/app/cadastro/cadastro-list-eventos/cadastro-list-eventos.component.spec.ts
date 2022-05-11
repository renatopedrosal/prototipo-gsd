import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroListEventosComponent } from './cadastro-list-eventos.component';

describe('CadastroListEventosComponent', () => {
  let component: CadastroListEventosComponent;
  let fixture: ComponentFixture<CadastroListEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroListEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroListEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
