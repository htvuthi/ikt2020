import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntriesListComponent} from "./pages/entries-list/entries-list.component";
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";
import {DetailedViewComponent} from "./pages/detailed-view/detailed-view.component";

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: EntriesListComponent },
      { path: 'entries/:id', component: DetailedViewComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
