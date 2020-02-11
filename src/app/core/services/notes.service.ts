import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

export interface Note {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private collection = this.firestore.collection<Note>('notes');

  constructor(private firestore: AngularFirestore) {}

  get notes() {
    return this.collection.valueChanges();
  }

  add(note: Note) {
    this.collection.add(note);
  }
}
