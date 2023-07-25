import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">Get value</button>
      <!-- <button (click)="handleClick(username)">Get value</button> -->
      <input type="text" #username />
      <div>{{ name }}</div>
    </div>
  `,
})
export class AppComponent {
  title: string;
  logo: string = "img/logo.svg";
  name: string = "Todd";

  handleClick(value: string) {
    // handleClick(value: any) {
    console.log(value);
    //console.log(value.value);
  }
  constructor() {
    this.title = "Ultimate Angular";
  }
}
