import { Controller, Get } from '@nestjs/common';
import { Production } from 'src/interfaces/production';
import { ProductionService } from './production.service';

@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Get('/data')
  async getData(): Promise<Production[]> {
    return await this.productionService.getProductionData();
  }
}
