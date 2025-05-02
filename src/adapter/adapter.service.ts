import { Injectable } from '@nestjs/common';

// 既存の英語のプリンタークラス（変更不可）
class LegacyPrinter {
  printTextEng(text: string): string {
    return `Print: ${text}`;
  }
}

// 日本語向けプリンターのインターフェース
interface JapanesePrinter {
  print(text: string): string;
}

// アダプタークラス（英語APIを日本語インタフェースに変換）
class PrinterAdapter implements JapanesePrinter {
  constructor(private legacy: LegacyPrinter) {}

  print(text: string): string {
    return this.legacy.printTextEng(text);
  }
}

@Injectable()
export class AdapterService {
  printJapanese(text: string): string {
    const adapter = new PrinterAdapter(new LegacyPrinter());
    return adapter.print(text);
  }
}
