import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Note {
  id?: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private collection = this.firestore.collection<Note>('notes');

  constructor(private firestore: AngularFirestore) {}

  add(note: Note) {
    this.collection.add(note);
  }

  getAll() {
    return this.collection.valueChanges({ idField: 'id' });
  }

  getOne(id: string) {
    return this.collection.doc<Note>(id).valueChanges();
  }
}
