import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('singleton')
  singleton() {
    return this.appService.useSingleton();
  }

  @Get('factory')
  factory() {
    return this.appService.useFactory();
  }

  @Get('strategy')
  strategy() {
    return this.appService.useStrategy();
  }

  @Get('observer')
  observer() {
    return this.appService.useObserver();
  }

  @Get('template')
  template() {
    return this.appService.useTemplate();
  }

  @Get('decorator')
  decorator() {
    return this.appService.useDecorator();
  }
}
