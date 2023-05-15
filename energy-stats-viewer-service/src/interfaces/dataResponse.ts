import { Demand } from './demand';
import { Production } from './production';

export interface DataResponse {
  demandList: Demand[];
  productionList: Production[];
}
