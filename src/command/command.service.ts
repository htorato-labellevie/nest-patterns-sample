import { Injectable } from '@nestjs/common';

// コマンドのインターフェース
interface Command {
  execute(): string;
}

// 具体的なコマンド
class LightOnCommand implements Command {
  execute(): string {
    return 'ライトをオンにしました';
  }
}

// 実行役（Invoker）
@Injectable()
export class CommandService {
  executeCommand(): string {
    const command = new LightOnCommand();
    return command.execute();
  }
}
