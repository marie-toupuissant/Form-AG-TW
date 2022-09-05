import { Component, OnInit } from '@angular/core';
// import { Router} from '@angular/router';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form = 'form';
  userEmail!:string;
  // userEmail:string="votre adressemail@novwell.fr";// valeur inscrite par défaut
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form :NgForm):void {
    console.log(form.value);
    
  }

}
