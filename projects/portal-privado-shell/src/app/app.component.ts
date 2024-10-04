import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomEventService } from './services/custom-event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  #customEventService = inject(CustomEventService);

  ngOnInit(): void {
    console.log('criou novo evento say-hello-from-shell');
    this.#customEventService.newCustomEvent(
      'say-hello-from-shell-event',
      'dizendo olá pela shell'
    );
  }

  onSayHelloClick() {
    console.log('clicou em say-hello-from-shell');
    this.#customEventService.dispachEvent('say-hello-from-shell-event');
  }
}
