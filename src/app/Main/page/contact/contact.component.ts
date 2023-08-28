import { Component } from '@angular/core';
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faPhoneVolume = faPhoneVolume;
  faEnvelope = faEnvelope;

}
