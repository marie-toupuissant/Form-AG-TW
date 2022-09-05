import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form!: FormGroup;
  
  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom:[null],
      prenom:[null],
      adresseMail:[null],
      telephone: [null],
      message: [null]
    });
  }
  // Méthodes
  onSubmitForm(): void {
    console.log(this.form.value);
  }


}
