//imports a nivel de angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// imports a nivel de logica
import { images } from '@features/dashboard/constants/constants';
import { ItemSelection } from '@features/dashboard/constants/constants';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  template: `
    <section class="flex flex-row p-4">
      <aside class="w-96 h-full flex flex-col bg-[#f7f7f7] mr-12 rounded-xl items-center">
        <img
          [src]="'assets/logos/dunzo.png'"
          [alt]="'dunzo icon'"
          class="w-52 h-auto object-cover"
        />
        <article></article>
        <article></article>
      </aside>
      <div class="w-full h-full flex flex-col">
        <header class="w-full h-20 flex justify-between items-center px-12 bg-[#f7f7f7] rounded-xl">
          <div class="relative w-96">
            <input
              type="text"
              placeholder="Search task"
              class="w-full h-12 rounded-2xl pl-12 pr-4 text-sm font-sans
               bg-white text-gray-900 placeholder:text-gray-400
               placeholder:font-medium shadow-sm border border-gray-200
               focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-300
               transition-all duration-200"
            />

            <img
              [src]="'assets/icons/search.png'"
              alt="Search icon"
              class="absolute top-1/2 left-4 -translate-y-1/2 w-6 h-6 opacity-70"
            />
          </div>

          <section class="flex flex-row gap-4">
            @for (image of images; track image.id) {
            <div class="inline-flex flex-row gap-3 items-center">
              <img [src]="image.src" [alt]="image.alt" class="w-8 h-auto object-cover" />

              @if (image.id === 3) {
              <div class="flex flex-col leading-none">
                <span class="font-semibold text-sm">BR7FORLIFE</span>
                <p class="text-xs text-gray-600">example@gmail.com</p>
              </div>
              }
            </div>
            }
          </section>
        </header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    </section>
  `,
})
export class Dashboard {
  images = images;
  items = ItemSelection;
}
