import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverBackgroundDirective } from './directive/hover-background.directive';
import { TextFormatPipe } from './pipe/text-format.pipe';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HoverBackgroundDirective, TextFormatPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
