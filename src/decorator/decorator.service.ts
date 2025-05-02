import { Injectable } from '@nestjs/common';

interface Coffee {
  cost(): number;
  description(): string;
}

class BasicCoffee implements Coffee {
  cost(): number {
    return 300;
  }

  description(): string {
    return '基本のコーヒー';
  }
}

// ✅ デコレーター：ミルク追加
class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 50;
  }

  description(): string {
    return this.coffee.description() + '、ミルク入り';
  }
}

// ✅ 新しいデコレーター：砂糖追加
class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 20;
  }

  description(): string {
    return this.coffee.description() + '、砂糖入り';
  }
}

@Injectable()
export class DecoratorService {
  makeCoffee(): string {
    const basic = new BasicCoffee();
    const milk = new MilkDecorator(basic);
    //const sweetMilk = new SugarDecorator(milk); // ← ミルク入りに砂糖追加
    return `${milk.description()} - ¥${milk.cost()}`;
    //return `${sweetMilk.description()} - ¥${sweetMilk.cost()}`;
  }
}
