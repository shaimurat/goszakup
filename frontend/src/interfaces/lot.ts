export interface DeliveryAddress {
  id: number;
  code: string;
  name_ru: string;
  name_kk: string;
}

export interface LotBase {
  id: number;
  external_id: number;
  lot_number: string;
  lot_number_key: string;
  announcement_number: string;
  announcement_number_key: string;
  organization_name: string;
  description_ru: string;
  description_kk: string;
  name_ru: string;
  name_kk: string;
  quantity: number;
  total_price: number;
  delivery_addresses: DeliveryAddress[];
  announcement_publish_date: string;
  purchase_method_name: string;
  purchase_method_id: number;
  announcement_id?: number;
  offer_start_date: string;
    offer_end_date: string;
}

export interface GoszakupLot extends LotBase {
  psd_sign: number | null;
  plan_year_id: number | null;
}

export interface MitworkLot extends LotBase {
  dumping_price: number;
}

export interface SamrukLot extends LotBase {}

export type Lot = GoszakupLot | MitworkLot | SamrukLot;