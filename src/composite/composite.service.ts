import { Injectable } from '@nestjs/common';

// コンポーネント共通インターフェース
interface Component {
  operation(): string;
}

// 葉（Leaf）
class Leaf implements Component {
  constructor(private name: string) {}

  operation(): string {
    return `Leaf: ${this.name}`;
  }
}

// 複合オブジェクト（Composite）
class Composite implements Component {
  private children: Component[] = [];

  add(child: Component): void {
    this.children.push(child);
  }

  operation(): string {
    return this.children.map(c => c.operation()).join(', ');
  }
}

@Injectable()
export class CompositeService {
  build(): string {
    const root = new Composite();
    root.add(new Leaf('A'));
    root.add(new Leaf('B'));
    return root.operation();
  }
}
