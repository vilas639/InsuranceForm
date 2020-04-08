import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileUploadPageRoutingModule } from './file-upload-routing.module';

import { FileUploadPage } from './file-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadPageRoutingModule
  ],
  declarations: [FileUploadPage]
})
export class FileUploadPageModule {}
