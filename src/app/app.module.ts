import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegistrComponent } from './registr/registr.component';
import { NavComponent } from './nav/nav.component';
import { ShopingListPageComponent } from './shoping-list-page/shoping-list-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItomComponent } from './edit-itom/edit-itom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ErrorPageComponent,
    LoginComponent,
    RegistrComponent,
    NavComponent,
    ShopingListPageComponent,
    AddItemComponent,
    EditItomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
