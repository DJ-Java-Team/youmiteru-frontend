import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "../constants/api";
import { DashBoard } from "../types/DashBoard";

export const useDashBoardQuery = () => {
    return useQuery({
        queryKey: ["dash-board-data"],
        queryFn: async() => {
            const result = await axios.get(`${BASE_API_URL}/db`);
            return result.data as DashBoard;
        },
    });
    
};
