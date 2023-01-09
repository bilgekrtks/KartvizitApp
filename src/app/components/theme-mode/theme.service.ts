import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type colorModes = 'lightMode' | 'darkMode'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: any;

  colorTheme$: BehaviorSubject<colorModes> = new BehaviorSubject<colorModes>('lightMode')

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)
  }
  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme)
  }
  update(theme: 'darkMode' | 'lightMode') {
    this.setColorTheme(theme)

    const previousColorTheme = (theme === 'darkMode' ? 'lightMode' : 'darkMode')
    this.renderer.removeClass(document.body, previousColorTheme)
    this.renderer.addClass(document.body, theme)
  }
  isDarkMode() {
    return this.colorTheme === 'darkMode'
  }
  private setColorTheme(theme: colorModes) {
    this.colorTheme = theme;
    this.colorTheme$.next(theme)
    localStorage.setItem('theme-mode', theme)
  }
  private getColorTheme() {
    if (localStorage.getItem('theme-mode')) {
      this.colorTheme = localStorage.getItem('theme-mode')
    } else {
      this.colorTheme = 'lightMode';
    }
  }

}
