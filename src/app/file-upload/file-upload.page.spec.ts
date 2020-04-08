import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FileUploadPage } from './file-upload.page';

describe('FileUploadPage', () => {
  let component: FileUploadPage;
  let fixture: ComponentFixture<FileUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
