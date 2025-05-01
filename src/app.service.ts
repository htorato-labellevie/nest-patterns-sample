import { Injectable } from '@nestjs/common';
import { LoggerService } from './singleton/logger.service';
import { FactoryService } from './factory/factory.service';
import { StrategyService } from './strategy/strategy.service';
import { ObserverService } from './observer/observer.service';
import { TemplateService } from './template/template.service';
import { DecoratorService } from './decorator/decorator.service';

@Injectable()
export class AppService {
  constructor(
    private readonly logger: LoggerService,
    private readonly factory: FactoryService,
    private readonly strategy: StrategyService,
    private readonly observer: ObserverService,
    private readonly template: TemplateService,
    private readonly decorator: DecoratorService,
  ) {}

  useSingleton() {
    this.logger.log('Using Singleton Pattern');
    return 'Logged using Singleton';
  }

  useFactory() {
    return this.factory.createButton().render();
  }

  useStrategy() {
    return this.strategy.pay(1000);
  }

  useObserver() {
    return this.observer.notifyAll('NestJS Event!');
  }

  useTemplate() {
    return this.template.dailyRoutine();
  }

  useDecorator() {
    return this.decorator.makeCoffee();
  }
}
