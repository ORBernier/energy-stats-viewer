import { Module } from '@nestjs/common';
import { ProductionController } from './production.controller';
import { ProductionService } from './production.service';
import { FetchService } from 'src/services/fetch.service';

@Module({
  imports: [],
  controllers: [ProductionController],
  providers: [ProductionService, FetchService],
})
export class ProductionModule {}
