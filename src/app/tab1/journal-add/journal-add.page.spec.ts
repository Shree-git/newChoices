import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalAddPage } from './journal-add.page';

describe('JournalAddPage', () => {
  let component: JournalAddPage;
  let fixture: ComponentFixture<JournalAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
