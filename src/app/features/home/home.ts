import {
  AfterViewInit,
  Component
} from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.animateHero();
    this.setupGlow();
  }

  private animateHero(): void {

    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out'
      }
    });

    tl
      .from('.eyebrow', {
        opacity: 0,
        y: 20,
        duration: .5
      })

      .from('.line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: .4
      }, '-=.2')

      .from('.hero h1', {
        opacity: 0,
        y: 40,
        duration: .8
      }, '-=.1')

      .from('.hero p', {
        opacity: 0,
        y: 20,
        duration: .6
      }, '-=.4')

      .from('.hero-link', {
        opacity: 0,
        y: 20,
        duration: .5
      }, '-=.3')

      .from('.hero-image img', {
        clipPath: 'circle(0% at 50% 50%)',
        scale: .9,
        duration: 1
      }, '-=.5');
  }

  private setupGlow(): void {

    const hero = document.querySelector<HTMLElement>('.hero');
    const glow = document.querySelector<HTMLElement>('.hero-glow');

    if (!hero || !glow) return;

    hero.addEventListener('mousemove', (e) => {

      const rect = hero.getBoundingClientRect();

      const x = e.clientX - rect.left - 260;
      const y = e.clientY - rect.top - 260;

      gsap.to(glow, {
        x,
        y,
        duration: .8,
        ease: 'power3.out'
      });

    });

    hero.addEventListener('mouseenter', () => {

      gsap.to(glow, {
        opacity: 1,
        duration: .5
      });

    });

    hero.addEventListener('mouseleave', () => {

      gsap.to(glow, {
        opacity: 0,
        duration: .5
      });

    });

  }

}