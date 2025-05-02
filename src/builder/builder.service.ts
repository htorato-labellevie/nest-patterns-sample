import { Injectable } from '@nestjs/common';

class Coffee {
  constructor(
    public size: string,
    public hasMilk: boolean,
    public hasSugar: boolean,
  ) {}

  description(): string {
    const milk = this.hasMilk ? 'ミルク入り' : 'ミルクなし';
    const sugar = this.hasSugar ? '砂糖入り' : '砂糖なし';
    return `${this.size}サイズのコーヒー（${milk}、${sugar}）`;
  }
}

class CoffeeBuilder {
  private size = 'M';
  private hasMilk = false;
  private hasSugar = false;

  setSize(size: string): this {
    this.size = size;
    return this;
  }

  addMilk(): this {
    this.hasMilk = true;
    return this;
  }

  addSugar(): this {
    this.hasSugar = true;
    return this;
  }

  build(): Coffee {
    return new Coffee(this.size, this.hasMilk, this.hasSugar);
  }
}

@Injectable()
export class BuilderService {
  buildCoffee(): string {
    const coffee = new CoffeeBuilder()
      .setSize('L')
      .addMilk()
      .addSugar()
      .build();
    return coffee.description();
  }
}
