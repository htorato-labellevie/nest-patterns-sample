import { Injectable } from '@nestjs/common';

interface Observer {
  update(data: string): string;
}

@Injectable()
export class ObserverService {
  private observers: Observer[] = [
    { update: (msg) => `アリスが受信しました: ${msg}` },
    { update: (msg) => `ボブが受信しました: ${msg}` },
  ];

  notifyAll(message: string): string[] {
    return this.observers.map(o => o.update(message));
  }
}
