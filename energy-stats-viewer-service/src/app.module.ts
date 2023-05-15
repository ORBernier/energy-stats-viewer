import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FetchService } from './services/fetch.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FetchService],
})
export class AppModule {}
