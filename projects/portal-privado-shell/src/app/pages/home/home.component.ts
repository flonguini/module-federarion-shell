import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomEventService } from '../../services/custom-event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  #customEventService = inject(CustomEventService);
  #listener: (event: CustomEvent<string>) => void =
    this.#handleEvent.bind(this);

  #handleEvent(event: CustomEvent<string>) {
    alert(`shell home listen: ${event.detail}`);
  }

  ngOnDestroy(): void {
    this.#customEventService.removeEventListener(
      'say-hello-from-shell-event',
      this.#listener
    );
  }

  onListenerClick() {
    console.log('clicou para ouvir say-hello-from-shell');
    this.#customEventService.addEventListener(
      'say-hello-from-shell-event',
      this.#listener
    );
  }
}
