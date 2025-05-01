import { Injectable } from '@nestjs/common';

interface Observer {
  update(data: string): string;
}

@Injectable()
export class ObserverService {
  private observers: Observer[] = [
    { update: (msg) => `Alice received: ${msg}` },
    { update: (msg) => `Bob received: ${msg}` },
  ];

  notifyAll(message: string): string[] {
    return this.observers.map(o => o.update(message));
  }
}
