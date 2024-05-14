import {Component} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-responsive-app-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    RouterLink,
    MatButton,
    MatMenuItem,
  ],
  templateUrl: './responsive-app-bar.component.html',
  styleUrl: './responsive-app-bar.component.scss'
})
export class ResponsiveAppBarComponent {}
