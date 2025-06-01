import axios from "axios";
import { apiConfig } from "../utils/api.config";
import { LotBase } from "../interfaces/lotBase.interface";

export class ZakupLotsService{
    private readonly apiUrl = 'https://zakup.gov.kz/api/core/api/core/_lots'

  async getLots(params?: Record<string, any>): Promise<LotBase[]> {
    try {
        const defaultParams = {
            ord: "-offer_start_date",
            delivery_adress_id__in: 23148,
            q: 'строительство, реконструкция, кап.ремонт',
            limit: 10000,
        };
        const finalParams = {...defaultParams,... params}

        const response = await axios.get(this.apiUrl, {
            params: finalParams,
            headers: apiConfig.headers
        })
        return response.data.results as LotBase[]
    }catch (error){
        console.error("Error fetching lots")
        throw error;
    }
}}