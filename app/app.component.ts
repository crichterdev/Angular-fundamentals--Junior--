import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <button  (click)="handleClick()">button</button>
      <input
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      />
      <div>{{ name }}</div>
    </div>
  `,
})
export class AppComponent {
  title: string;
  logo: string = "img/logo.svg";
  name: string = "Todd";

  handleBlur(event: any) {
    // this will update the property binding name.
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: Event) {
    //from my own research de expected type instead of any.
    this.name = (event.target as HTMLInputElement).value;
    console.log(event);
  }

  handleClick() {
    this.name = "Todd";
  }
  constructor() {
    this.title = "Ultimate Angular";
  }
}
