import { Controller, Get, Res } from '@nestjs/common';
import { DemandService } from './demand.service';
import { Response } from 'express';

@Controller('demand')
export class DemandController {
  constructor(private readonly demandService: DemandService) {}

  @Get('/data')
  async getData(@Res() res: Response) {
    const data = await this.demandService.getDemandData();
    res.set({ 'Access-Control-Allow-Origin': ['*'] }).send(data);
  }
}
