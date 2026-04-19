'use client';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CampersResponse, fetchCampers } from '@/lib/api/api';
import { Filters } from '@/types/filters';
import Icon from '@/components/common/Icon';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './CatalogClient.module.css';

interface CatalogClientProps {
  initialFilters: Filters;
}

export default function CatalogClient({ initialFilters }: CatalogClientProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess } =
    useInfiniteQuery<CampersResponse>({
      queryKey: ['campers', initialFilters],
      queryFn: ({ pageParam = 1 }) =>
        fetchCampers({ ...initialFilters, page: pageParam as number, perPage: 4 }),
      getNextPageParam: lastPage =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
      initialPageParam: 1,
      staleTime: 5000,
    });

  // Перевірка, чи порожній результат після успішного запиту
  const isEmpty = isSuccess && data?.pages[0]?.total === 0;

  return (
    <section className={css.catalogSection}>
      {isEmpty ? (
        <div className={css.emptyState}>
          <Icon id="search" size={48} className={css.emptyIcon} />
          <p className={css.emptyText}>
            No campers found matching your filters. Try adjusting your search criteria!
          </p>
        </div>
      ) : (
        <>
          <div className={css.list}>
            {data?.pages.map(page =>
              page.campers.map(camper => <CamperCard key={camper.id} camper={camper} />),
            )}
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
        </>
      )}

      <button
        className={`${css.scrollTop} ${showScrollTop ? css.isVisible : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <Icon id="arrow-up" size={32} />
      </button>
    </section>
  );
}
