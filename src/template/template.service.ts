import { Injectable } from '@nestjs/common';

abstract class DailyRoutine {
  startDay(): string[] {
    return [this.wakeUp(), this.doWork(), this.relax()];
  }

  private wakeUp(): string {
    return '朝起きる';
  }

  protected abstract doWork(): string;

  private relax(): string {
    return '夜にリラックスする';
  }
}

class EngineerRoutine extends DailyRoutine {
  protected doWork(): string {
    return '一日中コーディングする';
  }
}

@Injectable()
export class TemplateService {
  dailyRoutine(): string[] {
    const routine = new EngineerRoutine();
    return routine.startDay();
  }
}
