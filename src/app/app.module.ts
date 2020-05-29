import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatSelectModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import { JwtInterceptor } from './app-routing/jwt.interceptor';
import { StoresComponent } from './stores/stores.component';
import { EditStoreModalComponent } from './stores/edit-store-modal/edit-store-modal.component';
import { CreateStoreModalComponent } from './stores/create-store-modal/create-store-modal.component';
import { DeleteStoreModalComponent } from './stores/delete-store-modal/delete-store-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    StoresComponent,
    EditStoreModalComponent,
    CreateStoreModalComponent,
    DeleteStoreModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  entryComponents: [EditStoreModalComponent, CreateStoreModalComponent, DeleteStoreModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
