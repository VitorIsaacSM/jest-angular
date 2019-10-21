import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { combineLatest } from 'rxjs';

let fixture: ComponentFixture<AppComponent>
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
  })

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('deve printar test1', () => {
    jest.spyOn(component, 'print');
    const botao = fixture.debugElement.query(By.css('#btn1'));
    botao.nativeElement.dispatchEvent(new Event('click'));

    expect(component.print).toHaveBeenCalledWith('test1');
  });

  it('deve printar test2', () => {
    jest.spyOn(component, 'print');
    const botao = fixture.debugElement.query(By.css('#btn2'));
    botao.nativeElement.dispatchEvent(new Event('click'));

    expect(component.print).toHaveBeenCalledWith('test2');
  });

  it('deve printar test3', () => {
    jest.spyOn(component, 'print');
    const botao = fixture.debugElement.query(By.css('#btn3'));
    botao.nativeElement.dispatchEvent(new Event('click'));

    expect(component.print).toHaveBeenCalledWith('test3');
  });

  it('deve renderizar a mensagem de teste', () => {
    jest.spyOn(component, 'print');
    const botao = fixture.debugElement.query(By.css('#btn3'));
    botao.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const message = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(message.textContent).toBe('TEST MESSAGE');
  });
});
