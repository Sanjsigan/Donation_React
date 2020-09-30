import axios from "axios";
import { fetchAll } from "./dCandidates";

const baseUrl="http://localhost:50934/api/"

export default {
    dCandidates(url= baseUrl+'dCandidates'){
        return{
        fetchAll:()=>axios(url),
        fetchById:id=>axios.get(url+id),
        create :newRecord=>axios.post(url,newRecord),
        }
    }
}