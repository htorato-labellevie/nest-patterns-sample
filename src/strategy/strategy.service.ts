import { Injectable } from '@nestjs/common';

interface PaymentStrategy {
  pay(amount: number): string;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid ¥${amount} with Credit Card`;
  }
}

class PaypalStrategy implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid ¥${amount} with PayPal`;
  }
}

@Injectable()
export class StrategyService {
  private strategy: PaymentStrategy = new PaypalStrategy();

  pay(amount: number): string {
    return this.strategy.pay(amount);
  }
}
