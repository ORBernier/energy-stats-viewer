export interface ProductionResponse {
  date: string;
  valeurs: {
    total: number;
    hydraulique?: number;
    eolien?: number;
    autres?: number;
    solaire?: number;
    thermique?: number;
  };
}
