import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductionModule } from './production/production.module';
import { DemandModule } from './demand/demand.module';

@Module({
  imports: [ProductionModule, DemandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
