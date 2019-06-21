import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsupportComponent } from './chatsupport.component';

describe('ChatsupportComponent', () => {
  let component: ChatsupportComponent;
  let fixture: ComponentFixture<ChatsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
