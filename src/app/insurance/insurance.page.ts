import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {

  form: FormGroup;

  private myTemplate: any = '';
  myExternalPageLink ="D:/imps_stuff/insurance/SuryodayAuthorizationHTML/SuryodayAuthorizationHTML/index.html";
  @Input() url: string;

  // constructor(http: HttpClient) {
  //   http.get('D:/imps_stuff/insurance/SuryodayAuthorizationHTML/SuryodayAuthorizationHTML/index.html',
  //    {responseType: 'text'}).subscribe(data => this.myTemplate = data);


     
  //  }

   constructor()
   {
     
   }


  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      // price: new FormControl(null, {
      //   updateOn: 'blur',
      //   validators: [Validators.required, Validators.min(1)]
      // }),
      // dateFrom: new FormControl(null, {
      //   updateOn: 'blur',
      //   validators: [Validators.required]
      // }),
      // dateTo: new FormControl(null, {
      //   updateOn: 'blur',
      //   validators: [Validators.required]
      // })
    });
  }


  onCreateOffer() {
    console.log(this.form.value);

  }

 

}
