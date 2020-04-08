import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { FileToUpload } from './file-to-upload';
import { HttpClient, HttpEvent, HttpRequest ,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  filename1 :any
 
  API_URL ="http://localhost:8080";

 constructor(private https: HttpClient) { }


 pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  const data: FormData = new FormData();

  data.append('file', file);

  const newRequest = new HttpRequest('POST', 'http://localhost:8080/savefile', data, {
    reportProgress: true,
    responseType: 'text'
  });

  console.log(newRequest);

  return this.https.request(newRequest);
}
}
