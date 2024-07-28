import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";

@Component({
  selector: 'AppRoot',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}
