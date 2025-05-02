import { Injectable } from '@nestjs/common';

// 状態インターフェース
interface State {
  handle(): string;
}

class OnState implements State {
  handle(): string {
    return '電源オンの処理';
  }
}

class OffState implements State {
  handle(): string {
    return '電源オフの処理';
  }
}

@Injectable()
export class StateService {
  private isOn = true;

  changeState(): string {
    const state: State = this.isOn ? new OnState() : new OffState();
    this.isOn = !this.isOn;
    return state.handle();
  }
}
