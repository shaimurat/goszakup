import { LotBase } from './lotBase.interface';

export interface GoszakupLot extends LotBase {
  psd_sign: number | null;
  plan_year_id: number | null;
}