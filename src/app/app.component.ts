import { Component } from '@angular/core';
import { NotesService, Note } from './core/services/notes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  notes$ = this.notesService.getAll();

  noteForm: FormGroup;

  constructor(private notesService: NotesService) {
    this.noteForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });

    // this.notes$.subscribe(console.log);

    this.notesService.getOne('zrNtVp9citC44J1as7Jx').subscribe(console.log);
  }

  onSubmit() {
    if (this.noteForm.valid) {
      this.notesService.add(this.noteForm.value);
    } else {
      alert('Your form is not valid!');
    }
  }
}
