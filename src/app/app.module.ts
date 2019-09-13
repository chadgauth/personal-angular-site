import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule.withServerTransition({appId: 'chad'})],
    bootstrap: [AppComponent],
})

export class AppModule {

}