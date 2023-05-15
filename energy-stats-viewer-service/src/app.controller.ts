import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataResponse } from './interfaces/dataResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(): Promise<DataResponse> {
    return {
      demandList: await this.appService.getDemandData(),
      productionList: await this.appService.getProductionDemand(),
    };
  }
}
