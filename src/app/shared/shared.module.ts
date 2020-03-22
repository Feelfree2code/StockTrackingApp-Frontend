import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GridToolbarComponent } from './components/grid-toolbar/grid-toolbar.component';

@NgModule({
  declarations: [NavbarComponent, GridListComponent, PageNotFoundComponent, GridToolbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ToastrModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    GridListComponent,
    GridToolbarComponent
  ]
})
export class SharedModule { }
