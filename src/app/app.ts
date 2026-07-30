import { Component, signal } from '@angular/core';
import { Navbar } from "./shared/components/navbar/navbar";
import { About } from "./features/about/about";
import { Experience } from "./features/experience/experience";
import { ProjectsComponent } from "./features/projects/projects";
import { Contact } from "./features/contact/contact";
import { Footer } from "./shared/components/footer/footer";
import { HomeComponent } from "./features/home/home";

@Component({
  selector: 'app-root',
  imports: [Navbar, About, Experience, Contact, Footer, HomeComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('marianafrancisco-dev');
}
