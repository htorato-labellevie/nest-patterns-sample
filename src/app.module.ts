import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './singleton/logger.service';
import { FactoryService } from './factory/factory.service';
import { StrategyService } from './strategy/strategy.service';
import { ObserverService } from './observer/observer.service';
import { TemplateService } from './template/template.service';
import { DecoratorService } from './decorator/decorator.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    LoggerService,
    FactoryService,
    StrategyService,
    ObserverService,
    TemplateService,
    DecoratorService,
  ],
})
export class AppModule {}
