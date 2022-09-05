import { Component, OnInit } from '@angular/core';

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

  onSubmitForm(){
    console.log(this.userEmail);
    
  }

}
