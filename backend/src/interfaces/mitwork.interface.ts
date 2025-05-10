import { IDeliveryAddress, IPlanItem, IStatus, ISystem, IEnstru } from './goszakup.interface';

export interface IMitworkLot {
  delivery_addresses: IDeliveryAddress[];
  organization_name: string;
  description_ru: string;
  plan_items: IPlanItem[];
  status: IStatus;
  lot_number: string;
  psd_sign: number | null;
  system: ISystem;
  external_id: number;
  lot_number_key: string;
  name_kk: string;
  announcement_number: string;
  description_kk: string;
  quantity: number;
  dumping_price: number;
  enstrus: IEnstru[];
  offer_start_date: string;
  enstru_key: string;
  name_ru: string;
  id: number;
  total_price: number;
  purchase_subject_id: number[];
  announcement_number_key: string;
  status_name: string;
  announcement_publish_date: string;
  purchase_method_name: string;
  announcement_id: number;
  offer_end_date: string;
  purchase_method_id: number;
  plan_year_id: number | null;
}