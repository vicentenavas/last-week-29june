import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/shared/model';
import { DataService } from '../services/data/data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  contactList: Contact[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.contactList = this.dataService.getContact();
    console.log(this.contactList);
  }
  goToGmail(): void {
    const email = 'info@steaprogetto.com'; // Correo electrónico específico
    const baseLink = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=';
    const encodedEmail = encodeURIComponent(email);
    const finalLink = `${baseLink}${encodedEmail}`;

    window.location.href = finalLink;
  }
}

