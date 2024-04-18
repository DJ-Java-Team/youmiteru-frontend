import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "@/components/Footer/Footer";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { useCatalogQuery } from "@/hooks/useCatalogQuery";
import { CatalogParams } from "@/types/Catalog";
import { useEffect, useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";
import { useInView } from "react-intersection-observer";
import { HandleError } from "@/components/HandleError/HandleError";
import { Loader } from "@/components/Loader";

function Catalog() {
    const { ref, inView } = useInView();

    const [filterVisible, setFilterVisible] = useState<boolean>(false);
    const [filterParams, setFilterParams] = useState<Partial<CatalogParams>>(
        {}
    );

    const {
        data,
        error,
        refetch,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
    } = useCatalogQuery(filterParams);

    const handleFilterAnime = (params: CatalogParams) => {
        setFilterParams(params);
    };

    useEffect(() => {
        void refetch();
    }, [filterParams]);

    useEffect(() => {
        if (inView && hasNextPage) {
            void fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);
    if (isError) {
        console.log(error);
    }

    return (
        <div className="catalog">
            <NavigationBar />
            <div className="catalog__main">
                <div
                    className={`catalog__main__filter ${
                        filterVisible ? "filter-visible" : ""
                    }`}
                >
                    <CatalogFilter handleFilterAnime={handleFilterAnime} />
                </div>
                {isError ? (
                    <HandleError error={error} />
                ) : (
                    <div className="catalog__main__data">
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <AnimeList anime_data={data?.pages} />
                        )}
                    </div>
                )}
            </div>
            <div className="catalog__filter-btn">
                <button onClick={() => setFilterVisible(!filterVisible)}>
                    {filterVisible ? "Назад" : "Фильтры"}
                </button>
            </div>
            {hasNextPage && (
                <div className="catalog__loading-text" ref={ref}>
                    Loading...
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Catalog;
