import axios from 'axios';
import type { Demand } from '../interfaces/demand';
import type { Production } from '../interfaces/production';

const baseURL = 'http://localhost:3000/';
const demandURL = baseURL + 'demand/data';
const productionURL = baseURL + 'production/data';

export const fetchDemandData = async () => {
  const res = await axios.get(demandURL);
  const demandData: Demand[] = [];

  res.data.forEach((demand: Demand) => {
    demandData.push({
      date: demand.date,
      total: demand.total,
    });
  });

  return demandData;
};

export const fetchProductionData = async () => {
  const res = await axios.get(productionURL);
  const productionData: Production[] = [];

  res.data.forEach((production: Production) => {
    productionData.push({
      date: production.date,
      total: production.total,
      hydraulic: production.hydraulic,
      wind: production.wind,
      other: production.other,
      solar: production.solar,
      thermal: production.thermal,
    });
  });

  return productionData;
};
