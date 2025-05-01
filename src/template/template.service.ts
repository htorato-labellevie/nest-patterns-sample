import { Injectable } from '@nestjs/common';

abstract class DailyRoutine {
  startDay(): string[] {
    return [this.wakeUp(), this.doWork(), this.relax()];
  }

  private wakeUp(): string {
    return 'Wake up';
  }

  protected abstract doWork(): string;

  private relax(): string {
    return 'Relax in the evening';
  }
}

class EngineerRoutine extends DailyRoutine {
  protected doWork(): string {
    return 'Code all day';
  }
}

@Injectable()
export class TemplateService {
  dailyRoutine(): string[] {
    const routine = new EngineerRoutine();
    return routine.startDay();
  }
}
