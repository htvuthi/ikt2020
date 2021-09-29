import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesListComponent } from './pages/entries-list/entries-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { DetailedViewComponent } from './pages/detailed-view/detailed-view.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EntriesListComponent,
    MainLayoutComponent,
    EntryCardComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
