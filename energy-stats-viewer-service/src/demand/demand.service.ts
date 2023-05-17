import { Injectable } from '@nestjs/common';
import { Demand } from 'src/interfaces/demand';
import { FetchService } from 'src/services/fetch.service';

@Injectable()
export class DemandService {
  constructor(private readonly fetchService: FetchService) {}

  async getDemandData(): Promise<Demand[]> {
    const data = await this.fetchService.getDemandData();
    const demandList: Demand[] = [];
    data.forEach((demand) => {
      demandList.push({
        date: demand.date,
        total: demand.valeurs.demandeTotal,
      });
    });
    return demandList;
  }
}
