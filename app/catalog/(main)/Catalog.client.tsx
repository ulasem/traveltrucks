'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CampersResponse, fetchCampers } from '@/lib/api/api';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './CatalogClient.module.css';
import { Filters } from '@/types/filters';

interface CatalogClientProps {
  initialFilters: Filters;
}

export default function CatalogClient({ initialFilters }: CatalogClientProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<CampersResponse>({
      queryKey: ['campers', initialFilters],
      queryFn: ({ pageParam = 1 }) =>
        fetchCampers({ ...initialFilters, page: pageParam as number, perPage: 4 }),
      getNextPageParam: lastPage =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
      initialPageParam: 1,
      staleTime: 5000,
    });

  return (
    <section className={css.catalogSection}>
      <div>
        {data?.pages.map((page, i) => (
          <div key={i} className={css.list}>
            {page.campers.map(camper => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
        ))}
      </div>
      {hasNextPage && (
        <button
          className={css.loadMore}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </section>
  );
}
