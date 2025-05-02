import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './singleton/logger.service';
import { FactoryService } from './factory/factory.service';
import { StrategyService } from './strategy/strategy.service';
import { ObserverService } from './observer/observer.service';
import { TemplateService } from './template/template.service';
import { DecoratorService } from './decorator/decorator.service';
import { BuilderService } from './builder/builder.service';
import { AdapterService } from './adapter/adapter.service';
import { BridgeService } from './bridge/bridge.service';
import { ProxyService } from './proxy/proxy.service';
import { CommandService } from './command/command.service';
import { StateService } from './state/state.service';
import { CompositeService } from './composite/composite.service';
import { ChainService } from './chain/chain.service';

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
    BuilderService,
    AdapterService,
    BridgeService,
    ProxyService,
    CommandService,
    StateService,
    CompositeService,
    ChainService,
  ],
})
export class AppModule {}
