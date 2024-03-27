import StarIcon from "../assets/icons/glowing-star.svg";

interface SeasonDetailsProps {
    rating: number;
    release_date: string;
    short_description: string;
    age_restriction: string;
    year_season: number;
    genres: string[];
    season_id: number;
    season_image_url: string;
    season_name: string;
    bg_image_url: string;
}

function SeasonDetails({
    season_id,
    season_image_url,
    season_name,
    bg_image_url,
    rating,
    release_date,
    short_description,
    age_restriction,
    year_season,
    genres,
}: SeasonDetailsProps) {
    return (
        <main className="flex overflow-hidden">
            <img
                src={bg_image_url}
                alt="background-image"
                className="opacity-20 h-[550px] w-full"
            />

            <div className="flex absolute p-3 lg:p-5">
                <div className="z-10">
                    <img
                        src={season_image_url}
                        alt="season-image"
                        className="h-[320px] w-[250px] rounded-md lg:"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-5 ml-2 lg:gap-2 lg:ml-3 lg:items-start lg:pb-[110px]">
                    <p className="font-semibold text-[18px] lg:text-[24px] lg:">
                        {season_name}
                    </p>

                    <div className="flex flex-row gap-2 lg:hidden">
                        <p className="font-medium">Дата выхода:</p>
                        <p className="text-white">{release_date}</p>
                    </div>

                    <ul className="hidden lg:flex gap-5">
                        <li className="flex bg-gray-500 rounded-sm justify-center items-center h-[20px] w-[40px]">
                            <p>{rating}</p>
                            <img src={StarIcon} alt="star-icon"></img>
                        </li>

                        <li className="flex bg-gray-500 justify-center items-center w-[40px] h-[20px] rounded-sm">
                            <p>{year_season}</p>
                        </li>

                        <li className="flex rounded-sm bg-gray-500 justify-center items-center h-[20px] w-[30px] ">
                            <p>{age_restriction}+</p>
                        </li>
                    </ul>

                    <ul className="hidden lg:flex gap-3">
                        <p className="font-medium">Жанр:</p>
                        {genres?.map((genre, index) => (
                            <li key={index} className="ml-1">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    
                    <div className="hidden lg:flex flex-row gap-2">
                        <p className="font-medium">Дата выхода:</p>
                        <p className="text-white">{release_date}</p>
                    </div>

                    <div className="flex flex-row gap-16 items-center lg:hidden">
                        <ul className="flex flex-col">
                            <p className="font-medium">Жанр:</p>
                            {genres?.map((genre, index) => (
                                <li key={index} className="ml-1">
                                    {genre}
                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-col gap-5">
                            <li className="flex bg-gray-500 rounded-sm justify-center items-center h-[20px] w-[40px]">
                                <p>{rating}</p>
                                <img src={StarIcon} alt="star-icon"></img>
                            </li>

                            <li className="flex bg-gray-500 justify-center items-center w-[40px] h-[20px] rounded-sm">
                                <p>{year_season}</p>
                            </li>

                            <li className="flex rounded-sm bg-gray-500 justify-center items-center h-[20px] w-[30px] ">
                                <p>{age_restriction}+</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col ml-5 lg:ml-0 lg:mt-5">
                        <p className="font-medium lg:text-[20px]">
                            Краткое описание:
                        </p>
                        <p className="text-white line-clamp-3">
                            {short_description}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SeasonDetails;
