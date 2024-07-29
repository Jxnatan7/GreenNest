import {Component, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";

@Component({
  selector: 'AppRoot',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
}
