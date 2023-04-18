import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Marvellous Infosystems</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
        similique. Ullam dicta odio illo exercitationem incidunt id tempora
        minima velit sapiente sit eos ut, accusantium totam eum beatae error
        neque, sequi ea. Mollitia harum animi aliquid ipsum voluptatibus! Fuga,
        saepe.
      </p>
    </div>
  `,
  //if we want to use html in .ts file then ` ` -> is use and change the (templateURL to template)
  styles: [
    `
      h1 {
        color: blue;
      }

      p {
        color: red;
      }
    `,
  ],
  //if we want to use css in .ts file then ` ` -> is use and change the (styleURL to styles)
})
export class AppComponent {
  title = 'Angular_Assignment_3';
}
