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

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 50;
  }

  description(): string {
    return this.coffee.description() + '、ミルク入り';
  }
}

@Injectable()
export class DecoratorService {
  makeCoffee(): string {
    const basic = new BasicCoffee();
    const milk = new MilkDecorator(basic);
    return `${milk.description()} - ¥${milk.cost()}`;
  }
}
