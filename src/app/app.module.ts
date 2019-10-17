import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { InMemoryService } from './in-memory.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoDialog } from './todo-dialog/todo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDialog,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatNativeDateModule,
    AngularFontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService)
  ],
  exports:[TodoDialog],
  bootstrap: [AppComponent],
  entryComponents: [TodoDialog],
  providers: [TodoService, HttpErrorHandler, MessageService]
})
export class AppModule { }
