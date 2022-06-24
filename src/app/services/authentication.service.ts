import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/lib/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private router: Router
  ) { }
  public login: boolean = true;
  public newUser: User = {
    _id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
  }
  public test: any = {

  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email + "@gmail.com", password)
      .then((result) => {
        this.test = result.user;
        localStorage.setItem('item', this.test.uid);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email + "@gmail.com", password)
      .then((result) => {
        this.test = result.user;
        localStorage.setItem('item', this.test.uid);
        this.router.navigate(['/shopinglist']);
      })
      .catch((error) => {
        if(error.message.includes("There is no user record")) {
          this.SignUp(email, password)
          this.login = false;
        } else {
          alert(error.message);
        }
      });
  }

  async deletItem(id: number) {
    let currentUserId: any = localStorage.getItem("item");

    let product = await this.db.collection(`/item/${currentUserId}/product`, ref => ref.where('_id', '==', id)).get();

    product.toPromise().then(function(querySnapshot: any) {
      querySnapshot.forEach(function(doc: any) {
        doc.ref.delete();
      });
    });
  }
  
  async updateItem(item: any, id: number, categoryId: string) {
    let currentUserId: any = localStorage.getItem("item");
    let product = await this.db.collection(`/item/${currentUserId}/product`, ref => ref.where('_id', '==', id)).get();
    product.toPromise().then(function(querySnapshot: any) {
      querySnapshot.forEach(function(doc: any) {
        doc.ref.update({
          "categoty_id": categoryId,
          "name": item.name,
          "description": item.description,
        })
      });
    });
  }

  setData(firstname: string, lastname: string, email: string) {
    this.newUser = {
      _id: this.test.uid,
      firstName: firstname,
      lastName: lastname,
      fullName: firstname + ' ' + lastname,
      email: email,
    }
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("users")
        .add(this.newUser)
        .then(res => {
          console.log(res)
        },
          err => reject(err));
    });
  }

  getCategory() {
    return new Promise<any>((resolve) => {
      this.db.collection('category').valueChanges('allcategory').subscribe(category => {
        resolve(category)
      });
    })
  }
  getitem() {
    let id = localStorage.getItem("item")
    return new Promise<any>((resolve) => {
      this.db.collection(`item/${id}/product`).valueChanges('allitem').subscribe(item => {
        resolve(item)
      });
    })
  }

  addNewItem(categoty: string, name: string, description: string) {
    let id = localStorage.getItem("item")
    let date = new Date()
    let newitem = {
      name: name,
      description: description,
      categoty_id: categoty,
      date: date,
      _id: Date.now()
    }

    return new Promise<any>((resolve, reject) => {
      this.db
        .collection(`item`)
        .doc(`${id}`)
        .collection('product')
        .add(newitem)
        .then(res => {
          console.log(res)
        },
          err => reject(err));
    });
  }

}
