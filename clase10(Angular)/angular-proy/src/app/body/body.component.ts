import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  datalist=[];
  constructor() {
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBnLP51kVTBsXQTH8QGdoT7hnU2dOPcwd0",
        authDomain: "hotel-db-spring.firebaseapp.com",
        databaseURL: "https://hotel-db-spring.firebaseio.com",
        projectId: "hotel-db-spring",
        storageBucket: "hotel-db-spring.appspot.com",
        messagingSenderId: "619255228690",
        appId: "1:619255228690:web:e51dd3a7f95e3af352abcb",
        measurementId: "G-BNXMJHRGWL"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.database().ref("db/users").on("value", (datalist) => {
         this.datalist = Object.values(datalist.val());
      });
}

  ngOnInit() {
    console.log("Hola body!");

  }

}
