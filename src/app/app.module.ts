import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { PdfViewComponent } from './components/resume/pdf-view/pdf-view.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experiences/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    AboutComponent,
    PdfViewComponent,
    IntroComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent,
    ExperiencesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);