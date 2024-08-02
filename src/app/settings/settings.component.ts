import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})

export class SettingsComponent {

  client: any = {id: "", secret: ""};
  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  getToken() {
    this.tokenService.getToken(this.client);
  }
}
