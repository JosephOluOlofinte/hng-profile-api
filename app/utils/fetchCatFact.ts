import axios from "axios";
import { CAT_API_URL } from "../constants/env";

type ResponseProp = {
    fact: string;
    length: number;
}
export const fetchCatFact = async (): Promise<string> => {
    try {
        const response = await axios.get<ResponseProp>(CAT_API_URL, {
            timeout: 5000
        });

        return response.data.fact
    } catch (error) {
        console.error('error:', error);
        return 'We love cats, but we are unable to fetch a fact at the moment. Please retry shortly.'
    }
}