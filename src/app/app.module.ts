import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeModeComponent } from './components/theme-mode/theme-mode.component';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './welcome/login/login.component';
import { RegisterComponent } from './welcome/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {FieldsetModule} from 'primeng/fieldset';
import {BadgeModule} from 'primeng/badge';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import {ScrollTopModule} from 'primeng/scrolltop';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {PaginatorModule} from 'primeng/paginator';
import { ChartModule } from 'primeng/chart';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {DividerModule} from 'primeng/divider';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ThemeModeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SearchFormComponent,
    SidebarComponent,
    SidebarLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FieldsetModule,
    BadgeModule,
    InputNumberModule,
    InputTextModule,
    ScrollTopModule,
    RippleModule,
    TableModule,
    CalendarModule,
    PaginatorModule,
    ChartModule,
    SidebarModule,
    DividerModule




  ],
  providers: [{
    provide: 'apiUrl',
    useValue: 'https://demo.limantech.com/cards/public/api'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
