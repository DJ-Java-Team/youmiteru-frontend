import { useState } from "react";
import AgeRating from "./AgeRating/AgeRating";
import "./CatalogFilter.scss";
import FetchAnimeButton from "./FetchAnimeButton/FetchAnimeButton";
import Genre from "./Genre/Genre";
import ResetButton from "./ResetButton/ResetButton";
import Season from "./Season/Season";
import Format from "./Format/Format";
import State from "./State/State";

interface CatalogFilterProps {}

function CatalogFilter({}: CatalogFilterProps): JSX.Element {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedAgeRatings, setSelectedAgeRatings] = useState<string[]>([]);
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
    const [selectedFormat, setSelectedFormat] = useState<string[]>([]);
    const [selectedState, setSelectedState] = useState<string[]>([]);

    const handleResetFilter = () => {
        setSelectedAgeRatings([]);
        setSelectedGenres([]);
        setSelectedSeasons([]);
    };

    return (
        <div className="catalog-filter">
            <Genre
                setSelectedGenres={setSelectedGenres}
                selectedGenres={selectedGenres}
            />
            <AgeRating
                setSelectedAgeRatings={setSelectedAgeRatings}
                selectedAgeRatings={selectedAgeRatings}
            />
            <Season
                setSelectedSeasons={setSelectedSeasons}
                selectedSeasons={selectedSeasons}
            />
            <Format
                setSelectedFormat={setSelectedFormat}
                selectedFormat={selectedFormat}
            />
            <State
                setSelectedState={setSelectedState}
                selectedState={selectedState}
            />
            <div className="catalog-filter__buttons">
                <ResetButton handleResetFilter={handleResetFilter} />
                <FetchAnimeButton
                    selectedGenres={selectedGenres}
                    selectedAgeRatings={selectedAgeRatings}
                    selectedSeasons={selectedSeasons}
                    selectedFormat={selectedFormat}
                    selectedState={selectedState}
                />
            </div>
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ
export default CatalogFilter;
