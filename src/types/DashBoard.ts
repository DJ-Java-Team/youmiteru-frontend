import { Banner } from "./Banner";
import { Season } from "./Season";
import { User } from "./User";

export interface DashBoard {
    user: User[];
    banners: Banner[];
    announced_seasons: Season[];
    released_seasons: Season[];
    popular_seasons: Season[];
}
