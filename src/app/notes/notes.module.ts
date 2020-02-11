import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';

import { notesRoutes } from './notes.routes';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, RouterModule.forChild(notesRoutes)],
})
export class NotesModule {}
