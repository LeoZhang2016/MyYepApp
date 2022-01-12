import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,ReactiveFormsModule,FormsModule, FormGroupDirective, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../../core/services/http.service';
import { PopcorrectComponent } from '../popcorrect/popcorrect.component';
import { PoperrorComponent } from '../poperror/poperror.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  lang:any;
  form: any;
  submitted: any;
  @ViewChild('fd', {static: false}) private fd: FormGroupDirective;

  public  PROJECT_EOI_PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  public  PROJECT_EOI_EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  constructor(private fb: FormBuilder, private httpService: HttpService ,private toastrService: ToastrService,
    public dialog: MatDialog ) {

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(this.PROJECT_EOI_PHONE_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(this.PROJECT_EOI_EMAIL_REGEX)]],
      textArea: ""
    });
  }
  ngOnInit() {
  }
  get f() {
    return this.form.controls;
  }
  submit(){
    // alert("1111");
    // this.toastrService.success( 'Thank you for your message. Our consultant will contact you soon!', '', {
    //   positionClass: 'toast-top-right',
    // });
    // alert('thank you');
    // this.toastrService.success('some message', 'title');

    this.submitted = true;
    if(this.form.invalid){
      return;
    }

    const fd = new FormData();
    fd.append('name', this.form.get('name').value);
    fd.append('email', this.form.get('email').value);
    fd.append('phoneNumber', this.form.get('phone').value);
    fd.append('referrer', this.form.get('textArea').value);

    console.log("fd .....name.... :",fd.get('name'));
    console.log("fd .....email.... :",fd.get('email'));
    console.log("fd .....phone... :",fd.get('phoneNumber'));
    console.log("fd .....textArea.... :",fd.get('referrer'));


    this.httpService.sendEoiForProject(fd).subscribe((res: any) => {
      console.log("res....: ",res);
      if (res.code === 1) {
        this.fd.resetForm();
        this.submitted = false;

        // this.toastrService.success(this.lang === 'zh' ? '感谢您的留言 我们的专业顾问会尽快联系您！' : 'Thank you for your message. Our consultant will contact you soon!', '', {
        //   positionClass: 'toast-top-right',
        // });

        let dialogRef = this.dialog.open(PopcorrectComponent,{
          width: '400px',
          height: '300px'
        });

        setTimeout(()=>{
          dialogRef.close();
      },3000)
      } else {
        this.fd.resetForm();
        this.submitted = false;
        // this.toastrService.warning(this.lang === 'zh' ? '您输入的信息有误' : 'Sorry, the information you provided is incorrect.', '', {
        //   positionClass: 'toast-top-right',
        // });
        //******************************* */
        let dialogRef = this.dialog.open(PoperrorComponent,{
          width: '400px',
          height: '300px'
        });

         setTimeout(()=>{
             dialogRef.close();
         },3000)

        //******************************* */

      }
    });


    console.log("this form content is: ",this.form.value);
    console.log("this form content is: ",fd);
  }
}
