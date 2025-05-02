import { Injectable } from '@nestjs/common';
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

@Injectable()
export class AppService {
  constructor(
    private readonly logger: LoggerService,
    private readonly factory: FactoryService,
    private readonly strategy: StrategyService,
    private readonly observer: ObserverService,
    private readonly template: TemplateService,
    private readonly decorator: DecoratorService,
    private readonly builder: BuilderService,
    private readonly adapter: AdapterService,
    private readonly bridge: BridgeService,
    private readonly proxy: ProxyService,
  ) {}

  useSingleton() {
    this.logger.log('シングルトンパターンを使用');
    return 'シングルトンパターンを使用してログ出力しました';
  }

  useFactory() {
    return this.factory.createButton().render(); // ファクトリーパターンで作成したボタンをレンダリング
  }

  useStrategy() {
    return this.strategy.pay(1000); // ストラテジーパターンで支払い処理を実行
  }

  useObserver() {
    return this.observer.notifyAll('NestJSイベント！'); // オブザーバーパターンで全てのオブザーバーに通知
  }

  useTemplate() {
    return this.template.dailyRoutine(); // テンプレートメソッドパターンで日々のルーティンを実行
  }

  useDecorator() {
    return this.decorator.makeCoffee(); // デコレーターパターンでコーヒーを作成
  }

  useBuilder() {
    return this.builder.buildCoffee(); // ビルダーパターンで複雑なコーヒーを組み立て
  }
  
  useAdapter() {
    return this.adapter.printJapanese('こんにちは'); // アダプターパターンで既存の英語APIを日本語に変換
  }
  
  useBridge() {
    return this.bridge.controlDevice(); // ブリッジパターンでデバイス（TV/ラジオ）を操作
  }
  
  useProxy() {
    return this.proxy.getData(); // プロキシパターンで遅延データ取得を制御
  }
}
