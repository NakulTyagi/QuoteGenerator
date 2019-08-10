import { Component } from '@angular/core';
import { freeApiService } from "./freeapi.service"
import { Comments } from './comments';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document, private _freeApiService: freeApiService) { }

  public quotes = [];
  quot: string;
  author: string;
  arr: string[];
  ngOnInit() {
    this._freeApiService.getcomments().subscribe(
      data => {
        this.quotes = data;
      }

    )

  }

  find() {
    document.getElementById("div1").innerHTML = "";
    for (var k in this.quotes) {
      var inputValue = (<HTMLInputElement>document.getElementById("form1")).value;
      var str = this.quotes[k].quote;
      //console.log(str);
      this.arr = str.trim().split(" ");
      console.log(this.arr);
      for (var j = 0; j < this.arr.length; j++) {
        if (this.arr[j] == inputValue || this.arr[j].toUpperCase() === inputValue.toUpperCase()) {
          document.getElementById("div1").style.display = "block";
          this.quot = this.quotes[k].quote;
          this.author = this.quotes[k].author;
          var para = document.createElement("li");
          var node = document.createTextNode(this.quot);
          para.appendChild(node);
          var node = document.createTextNode("  Author:" + this.author);
          para.appendChild(node);

          var element = document.getElementById("div1");
          element.appendChild(para);
          console.log("deepest");
        }

      }
    }
  }

}
