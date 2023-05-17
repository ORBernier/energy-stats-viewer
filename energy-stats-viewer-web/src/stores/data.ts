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
  getters: {
    getDemandList(state) {
      return state.demandList.filter((demand) => demand.total);
    },
    getDemandDates(state) {
      return state.demandList.map((demand) => demand.date);
    },
    getTotalDemand(state) {
      let total = 0;
      state.demandList.forEach((demand) => {
        demand.total ? (total += demand.total) : total;
      });
      return total;
    },
    getTotalDemandByDate(state) {
      return state.demandList.map((demand) => demand.total);
    },
    getDemandByProductionDate(): number[] {
      const prodDates = this.getProductionDates;
      const demandList = this.getDemandList;

      const data: number[] = [];
      demandList.forEach((demand) => {
        prodDates.forEach((prod) => {
          if (demand.date === prod) {
            data.push(demand.total || 0);
          }
        });
      });
      return data;
    },
    getProductionList(state) {
      return state.productionList.filter(
        (production) => production.total !== 0,
      );
    },
    getProductionDates(): string[] {
      const prodList = this.getProductionList;
      const data = prodList.map((prod) => prod.date);
      return data;
    },
    getTotalProduction(state) {
      let total = 0;
      state.productionList.forEach((prod) => {
        total += prod.total;
      });
      return total;
    },
    getTotalProductionByDate(state) {
      return state.productionList.map((prod) => prod.total);
    },
    getTotalProductionByTypes(state) {
      const computedData = {
        totalHydraulic: 0,
        totalWind: 0,
        totalSolar: 0,
        totalThermal: 0,
        totalOthers: 0,
      };
      state.productionList.forEach((prod) => {
        prod.hydraulic
          ? (computedData.totalHydraulic += prod.hydraulic)
          : computedData.totalHydraulic;
        prod.wind
          ? (computedData.totalWind += prod.wind)
          : computedData.totalWind;
        prod.solar
          ? (computedData.totalSolar += prod.solar)
          : computedData.totalSolar;
        prod.thermal
          ? (computedData.totalThermal += prod.thermal)
          : computedData.totalThermal;
        prod.other
          ? (computedData.totalOthers += prod.other)
          : computedData.totalOthers;
      });
      return [
        computedData.totalHydraulic,
        computedData.totalWind,
        computedData.totalSolar,
        computedData.totalThermal,
        computedData.totalOthers,
      ];
    },
  },
});
