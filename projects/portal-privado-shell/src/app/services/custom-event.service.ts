import { Injectable } from '@angular/core';

//array com todos eventos
const customEvents = [
  'say-hello-from-shell-event',
  'say-hello-from-shell-home-event',
] as const;

//tipo dos eventos de acordo com todos os eventos do array
type CustomEventType = (typeof customEvents)[number];

@Injectable({
  providedIn: 'root',
})
export class CustomEventService {
  #events: Array<CustomEvent<CustomEventType>> = [];

  newCustomEvent(customEvent: CustomEventType, body: any) {
    const newEvent = new CustomEvent(customEvent, {
      detail: body,
    });
    this.#events.push(newEvent);
  }

  dispachEvent(eventType: CustomEventType) {
    const event = this.#events.find((event) => event.type === eventType);

    if (!event) throw new Error('Event not found');
    window.dispatchEvent(event);
  }

  addEventListener<T>(
    eventType: CustomEventType,
    listener: (event: CustomEvent<T>) => void,
    options?: boolean | AddEventListenerOptions
  ) {
    window.addEventListener(eventType, listener as EventListener, options);
  }

  removeEventListener<T>(
    eventType: CustomEventType,
    listener: (event: CustomEvent<T>) => void,
    options?: boolean | AddEventListenerOptions
  ) {
    window.removeEventListener(eventType, listener as EventListener, options);
  }
}
