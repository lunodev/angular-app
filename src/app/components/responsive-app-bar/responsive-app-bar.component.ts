import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-responsive-app-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatIcon,
  ],
  templateUrl: './responsive-app-bar.component.html',
  styleUrl: './responsive-app-bar.component.scss'
})
export class ResponsiveAppBarComponent {

}
