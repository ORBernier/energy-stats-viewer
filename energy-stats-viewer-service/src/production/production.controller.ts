import { Controller, Get, Res } from '@nestjs/common';
import { ProductionService } from './production.service';
import { Response } from 'express';

@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Get('/data')
  async getData(@Res() res: Response) {
    const data = await this.productionService.getProductionData();
    res.set({ 'Access-Control-Allow-Origin': ['*'] }).send(data);
  }
}
