import { Injectable } from '@nestjs/common';

// 実際のデータ取得サービス（コストが高い処理と仮定）
class RealDataFetcher {
  fetch(): string {
    return 'データを取得しました';
  }
}

// プロキシクラス（遅延生成＋キャッシュなどを担う）
class DataFetcherProxy {
  private realFetcher: RealDataFetcher | null = null;

  fetch(): string {
    if (!this.realFetcher) {
      this.realFetcher = new RealDataFetcher(); // 必要になるまで作らない（遅延生成）
    }
    return this.realFetcher.fetch();
  }
}

@Injectable()
export class ProxyService {
  getData(): string {
    const proxy = new DataFetcherProxy();
    return proxy.fetch();
  }
}
