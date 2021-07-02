
import { Component, OnInit,ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core/services/auth.service';
ApiService


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  importDataForm: FormGroup;
  import_file: any = null;
  allowedExtensions = ["json"];
  fileTypeNotAllowed = false;
  alert = false;

  @ViewChild('dataFile', { static: false }) inputVar: ElementRef;
  @ViewChild('fileInput', {static: false}) myFileInput: ElementRef;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService : ApiService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.importDataForm = this.formBuilder.group({
      datafile: ["", [Validators.required]],
    });
  }

    fileUpload(files) {
    //console.log("FILE UPLOAD", files);
    this.fileTypeNotAllowed = false;
    this.import_file = files[0];
    this.import_file.filename = this.import_file.name;
    //console.log("this.import_file:", this.import_file)
    const extension = this.import_file.filename.split(".").pop();
    if (this.allowedExtensions.indexOf(extension) === -1) {
      this.fileTypeNotAllowed = true;
      this.importDataForm.get("datafile").setErrors({ extension: true });
    } 
  }

  submit(data) {
    if (this.importDataForm.valid) {
      //console.log("ON submit", data);
      const formValues = new FormData();
      formValues.append("datafile", this.import_file);
      console.log("form val", formValues);
      this.apiService.uploadJson(formValues).subscribe(
        (res) => {
          this.clearSelection()
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
            this.router.navigate(['/user-posts'])
          }, 3000);
        },
        (error) => {
          //console.log("this.import_file: ", this.import_file) 
        }
      );
    } else{
      window.alert("Choose .json file")
    }
  }

  clearSelection(){
      this.myFileInput.nativeElement.reset();
  }

  closeAlert(){
    this.alert = false;
  }

  

}
