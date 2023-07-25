import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <button  (click)="handleClick()">button</button>
      <input
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      />
      <input
        [(ngModel)]="name"
      />
      <div>{{ name }}</div>
    </div>
  `,
})
export class AppComponent {
  title: string;
  logo: string = "img/logo.svg";
  name: string = "Todd";

  handleChange(event: string) {
    //from my own research de expected type instead of any.
    this.name = event;
    console.log(event);
  }

  handleClick() {
    this.name = "Todd";
  }
  constructor() {
    this.title = "Ultimate Angular";
  }
}
