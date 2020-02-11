import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private collection = this.firestore.collection<User>('users');
  public users = this.collection.valueChanges();

  constructor(private firestore: AngularFirestore) {}
}
