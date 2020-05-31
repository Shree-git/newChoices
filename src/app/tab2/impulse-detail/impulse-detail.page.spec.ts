import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpulseDetailPage } from './impulse-detail.page';

describe('ImpulseDetailPage', () => {
  let component: ImpulseDetailPage;
  let fixture: ComponentFixture<ImpulseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpulseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpulseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
