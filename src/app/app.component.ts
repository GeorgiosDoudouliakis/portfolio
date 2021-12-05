import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Portfolio website of George Doudouliakis, a Front End Web Developer' },
      { name: 'author', content: 'George Doudouliakis' },
      { name: 'keywords' , content: 'portfolio, George Doudouliakis, front end web development, web development' }
    ])

    this.title.setTitle('George Doudouliakis | Front End Web Developer');
  }
}