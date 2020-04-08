import { Component, OnInit, Inject } from '@angular/core';

import { FileUploadService } from './file-upload.service';
import { FileToUpload } from './file-to-upload';

import { HttpResponse, HttpEventType } from '@angular/common/http';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.page.html',
  styleUrls: ['./file-upload.page.scss'],
})
export class FileUploadPage implements OnInit {

  STORAGE_KEY = 'local_filename';

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  filename;
  filename1  : any;

  abc :any;


  constructor(private uploadService:    FileUploadService,@Inject(LOCAL_STORAGE) private storage: StorageService){}
  ngOnInit(): void {

    //this.filename = this.uploadService.filename1; 
     console.log("oninit"+this.filename);
    }


     downloadFile(){

    // const link1 =document.getElementById("customFile")
    // this.abc.nativeElement.value
   console.log("from storage"+this.storage.get(this.STORAGE_KEY));
   this.filename = this.storage.get(this.STORAGE_KEY);
    const link = document.createElement('a');
    console.log(this.filename+'.xlsx');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/'+this.filename+'.xlsx');
    link.setAttribute('download', this.filename+'.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  change($event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }
  
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload.name);
    //this.filename = this.uploadService.filename1; 
    
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {

      console.log('File Successfully Uploaded');


      this.filename= (<HTMLInputElement>document.getElementById('customFile')).files[0].name;
      console.log( "after onload"+this.filename+'.xlsx');
       alert('File Decryption Done Successfully');  

      }
    

        this.selectedFiles = undefined;
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name)
    this.filename = this.selectedFiles[0].name;
    console.log(this.filename);

    this.filename= this.filename.split('.').slice(0, -1).join('.')
    console.log("after exte"+this.filename);
    
     // insert updated array to local storage
     this.storage.set(this.STORAGE_KEY, this.filename);

}

}
