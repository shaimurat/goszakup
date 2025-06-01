export interface DeliveryAddress {
  id: number;
  code: string;
  name_ru: string;
  name_kk: string;
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

export interface ZakupLotBase {
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
  system: System;
  total_price: number;
  delivery_addresses: DeliveryAddress[];
  status: Status;
  announcement_publish_date: string;
  purchase_method_name: string;
  purchase_method_id: number;
  announcement_id?: number;
  offer_start_date: string;
    offer_end_date: string;
}
