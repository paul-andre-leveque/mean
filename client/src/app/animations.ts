import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';


export const fader =

    trigger('routeAnimations', [

        transition('* <=> *', [

            style({ opacity: 0 }),

            animate('1000ms ease', style({ opacity: 1 }))
        ]),

        transition('* <=> *', [

            style({ opacity: 0 }),

            animate('1000ms ease', style({ opacity: 1 }))
        ]),
    ]);

