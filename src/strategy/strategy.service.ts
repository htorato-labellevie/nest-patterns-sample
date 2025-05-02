import { Injectable } from '@nestjs/common';

interface PaymentStrategy {
  pay(amount: number): string;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): string {
    return `クレジットカードで ¥${amount} 支払いました`;
  }
}

class PaypalStrategy implements PaymentStrategy {
  pay(amount: number): string {
    return `PayPalで ¥${amount} 支払いました`;
  }
}

@Injectable()
export class StrategyService {
  private strategy: PaymentStrategy = new PaypalStrategy();

  pay(amount: number): string {
    return this.strategy.pay(amount);
  }
}
