import { Injectable } from '@nestjs/common';

// ハンドラのインターフェース
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
    private nextHandler?: Handler; 

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return '処理できません';
  }
}

class AuthHandler extends AbstractHandler {
  handle(request: string): string {
    if (request === 'auth') return '認証しました';
    return super.handle(request);
  }
}

class LogHandler extends AbstractHandler {
  handle(request: string): string {
    if (request === 'log') return 'ログ記録しました';
    return super.handle(request);
  }
}

@Injectable()
export class ChainService {
  process(request: string): string {
    const auth = new AuthHandler();
    const log = new LogHandler();
    auth.setNext(log);

    return auth.handle(request);
  }
}
