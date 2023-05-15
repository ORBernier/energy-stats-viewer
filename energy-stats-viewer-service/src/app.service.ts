import { Injectable } from '@nestjs/common';
import { FetchService } from './services/fetch.service';
import { Demand } from './interfaces/demand';
import { Production } from './interfaces/production';

@Injectable()
export class AppService {
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

  async getProductionDemand(): Promise<Production[]> {
    const data = await this.fetchService.getProductionData();
    const productionList: Production[] = [];
    data.forEach((production) => {
      productionList.push({
        date: production.date,
        total: production.valeurs.total,
        hydraulic: production.valeurs.hydraulique,
        wind: production.valeurs.eolien,
        other: production.valeurs.autres,
        solar: production.valeurs.solaire,
        thermal: production.valeurs.thermique,
      });
    });
    return productionList;
  }
}
