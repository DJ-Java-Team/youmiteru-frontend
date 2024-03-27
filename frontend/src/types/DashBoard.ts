import { Banner } from "./Banner";
import { Season } from "./Season";

export interface DashBoard {
    banners: Banner[];
    announced_seasons: Season[];
    recent_released_seasons: Season[];
    popular_seasons: Season[];
}
