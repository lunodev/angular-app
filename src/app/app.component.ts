import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ResponsiveAppBarComponent} from "./components/responsive-app-bar/responsive-app-bar.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResponsiveAppBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
