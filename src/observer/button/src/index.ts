import { fromEvent } from 'rxjs';

const button = document.createElement('button');
button.innerText = 'Click';
document.body.appendChild(button);
const click$ = fromEvent(button, 'click');
click$.subscribe(() => console.log('Clicked'));
