import { Component } from '@angular/core';
import { ThemeService } from './theme.service';


@Component({
  selector: 'app-theme-mode',
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent {

  isDarkMode: boolean = false;
  mode: string = 'light_mode'
  constructor(private themeService: ThemeService) {
    this.themeService.initTheme()
    this.isDarkMode = this.themeService.isDarkMode()
    this.themeService.colorTheme$.subscribe(theme => {
      this.mode = this.themeService.isDarkMode() ? 'dark_mode' : 'light_mode'
    })
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode()
    this.isDarkMode ? this.themeService.update('lightMode') : this.themeService.update('darkMode')
  }

}


