import { Injectable } from '@nestjs/common';
import { DemandResponse } from 'src/interfaces/demandResponse';
import { ProductionResponse } from 'src/interfaces/productionResponse';

const demandURL =
  'https://www.hydroquebec.com/data/documents-donnees/donnees-ouvertes/json/demande.json';
const productionURL =
  'https://www.hydroquebec.com/data/documents-donnees/donnees-ouvertes/json/production.json';

@Injectable()
export class FetchService {
  async getDemandData(): Promise<DemandResponse[]> {
    return await fetch(demandURL)
      .then((res) => res.json())
      .then((data) => {
        return data.details;
      });
  }
  async getProductionData(): Promise<ProductionResponse[]> {
    return await fetch(productionURL)
      .then((res) => res.json())
      .then((data) => {
        return data.details;
      });
  }
}
