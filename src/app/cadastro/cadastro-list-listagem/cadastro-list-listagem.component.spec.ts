import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroListListagemComponent } from './cadastro-list-listagem.component';

describe('CadastroListListagemComponent', () => {
  let component: CadastroListListagemComponent;
  let fixture: ComponentFixture<CadastroListListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroListListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroListListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
