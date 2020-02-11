import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { NotesModule } from './notes.module';

export interface Note {
  title: string;
  content: string;
}

@Injectable({
  providedIn: NotesModule,
})
export class NotesService {
  private collection = this.firestore.collection<Note>('notes');

  constructor(private firestore: AngularFirestore) {}

  get notes() {
    return this.collection.valueChanges();
  }

  create(note: Note) {
    this.collection.add(note);
  }

  update(id: string) {
    this.collection.doc<Note>(id).set({
      title: 'sdfds',
      content: 'dfd',
    });
  }
}
