import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Formulaire d'inscription`;
  constructor(private router: Router) {

  }

  // Les méthodes
  // onAddForm(): void {
  //   this.router.navigateByUrl('/create')
  // }
}
