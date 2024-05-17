import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'lib-codesroots-payments',
  template: `
      <main>
        <div>
           <app-payment-list></app-payment-list> 
        </div>
      </main>
 
  `,
  styles: [
  ],
  animations: [
    trigger('exampleAnimation', [
      state('start', style({
        opacity: 1
      })),
      transition('* => start', [
        animate('0.5s')
      ])
    ])
  ]
})
export class CodesrootsPaymentsComponent {

}
