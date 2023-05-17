import { Injectable } from '@nestjs/common';
import { Production } from 'src/interfaces/production';
import { FetchService } from 'src/services/fetch.service';

@Injectable()
export class ProductionService {
  constructor(private readonly fetchService: FetchService) {}

  async getProductionData(): Promise<Production[]> {
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
