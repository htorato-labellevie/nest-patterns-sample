import { Injectable } from '@nestjs/common';

interface Button {
  render(): string;
}

class WindowsButton implements Button {
  render(): string {
    return 'Windowsボタンを描画しました';
  }
}

class MacButton implements Button {
  render(): string {
    return 'Macボタンを描画しました';
  }
}

@Injectable()
export class FactoryService {
  createButton(): Button {
    return new WindowsButton(); // ここで条件分岐して MacButton に切り替えることも可能
  }
}
