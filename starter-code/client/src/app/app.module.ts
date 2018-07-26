import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes'
import { AppComponent } from './app.component';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { JournalService } from 'services/journal.serv';
import { RouterModule } from '@angular/router';
import { SingleentryComponent } from './singleentry/singleentry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrylistComponent,
    SingleentryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
