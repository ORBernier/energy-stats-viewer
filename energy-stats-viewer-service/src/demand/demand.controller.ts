import { Controller, Get } from '@nestjs/common';
import { Demand } from 'src/interfaces/demand';
import { DemandService } from './demand.service';

@Controller('demand')
export class DemandController {
  constructor(private readonly demandService: DemandService) {}

  @Get('/data')
  async getData(): Promise<Demand[]> {
    return await this.demandService.getDemandData();
  }
}
