import { Routes } from '@angular/router';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { SingleentryComponent } from './singleentry/singleentry.component';

export const routes: Routes = [
  { path: 'home', component: EntrylistComponent },
  { path: 'entry/:id', component: SingleentryComponent }
]