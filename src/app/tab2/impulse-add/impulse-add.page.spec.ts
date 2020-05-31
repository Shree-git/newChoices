import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpulseAddPage } from './impulse-add.page';

describe('ImpulseAddPage', () => {
  let component: ImpulseAddPage;
  let fixture: ComponentFixture<ImpulseAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpulseAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpulseAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
