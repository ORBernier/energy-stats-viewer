import { Module } from '@nestjs/common';
import { DemandController } from './demand.controller';
import { DemandService } from './demand.service';
import { FetchService } from 'src/services/fetch.service';

@Module({
  imports: [],
  controllers: [DemandController],
  providers: [DemandService, FetchService],
})
export class DemandModule {}
