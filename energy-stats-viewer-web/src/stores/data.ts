import type { Demand } from '@/shared/interfaces/demand';
import type { Production } from '@/shared/interfaces/production';
import { defineStore } from 'pinia';

interface State {
  demandList: Demand[];
  productionList: Production[];
}

export const useDataStore = defineStore('data', {
  state: (): State => {
    return {
      demandList: [],
      productionList: [],
    };
  },
});
