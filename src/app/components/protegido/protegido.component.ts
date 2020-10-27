import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegido',
  templateUrl: './protegido.component.html',
  styleUrls: ['./protegido.component.css']
})
export class ProtegidoComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
