import { Injectable } from '@nestjs/common';

// 実装の階層（Device）
interface Device {
  turnOn(): string;
  turnOff(): string;
}

class TV implements Device {
  turnOn(): string {
    return 'テレビをオンにしました';
  }

  turnOff(): string {
    return 'テレビをオフにしました';
  }
}

class Radio implements Device {
  turnOn(): string {
    return 'ラジオをオンにしました';
  }

  turnOff(): string {
    return 'ラジオをオフにしました';
  }
}

// 抽象の階層（RemoteControl）
class RemoteControl {
  constructor(protected device: Device) {}

  togglePower(): string[] {
    return [this.device.turnOn(), this.device.turnOff()];
  }
}

@Injectable()
export class BridgeService {
  controlDevice(): string[] {
    const remote = new RemoteControl(new TV());
    // const remote = new RemoteControl(new Radio()); // ラジオに切り替え
    return remote.togglePower();
  }
}
