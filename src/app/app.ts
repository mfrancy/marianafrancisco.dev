import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { About } from "./features/about/about";
import { Experience } from "./features/experience/experience";
import { Projects } from "./features/projects/projects";
import { Contact } from "./features/contact/contact";
import { Footer } from "./shared/components/footer/footer";
import { HomeComponent } from "./features/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Experience, Projects, Contact, Footer, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('marianafrancisco-dev');
}
