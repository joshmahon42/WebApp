import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      IonicModule.forRoot(),
      IonicStorageModule.forRoot(),//Initialize IonicStorageModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}