import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalDetailPage } from './journal-detail.page';

describe('JournalDetailPage', () => {
  let component: JournalDetailPage;
  let fixture: ComponentFixture<JournalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
