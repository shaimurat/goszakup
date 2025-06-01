export interface DeliveryAddress {
  id: number;
  code: string;
  name_ru: string;
  name_kk: string;
}

export interface PlanItem {
  external_id: string | null;
  id: number;
}

export interface Status {
  id: number;
  name: string;
  is_active: boolean;
  code: string | null;
}

export interface System {
  id: number;
  name: string;
}

export interface Enstru {
  id: number;
  code: string;
  name_ru: string;
  name_kk: string;
  short_description_ru: string;
  short_description_kk: string;
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
  status: Status;
  system: System;
  delivery_addresses: DeliveryAddress[];
  plan_items: PlanItem[];
  enstrus: Enstru[];
  offer_start_date: string;
  offer_end_date: string;
  announcement_publish_date: string;
  purchase_method_name: string;
  purchase_method_id: number;
  purchase_subject_id: number[];
}
