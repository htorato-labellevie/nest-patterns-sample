import { Injectable } from '@nestjs/common';

interface Button {
  render(): string;
}

class WindowsButton implements Button {
  render(): string {
    return 'Rendered Windows Button';
  }
}

class MacButton implements Button {
  render(): string {
    return 'Rendered Mac Button';
  }
}

@Injectable()
export class FactoryService {
  createButton(): Button {
    return new WindowsButton();
  }
}
