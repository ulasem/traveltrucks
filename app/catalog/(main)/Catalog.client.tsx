'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CampersResponse, fetchCampers } from '@/lib/api/api';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './CatalogClient.module.css';
import { Filters } from '@/types/filters';
import { useEffect, useState } from 'react';
import Icon from '@/components/common/Icon';

interface CatalogClientProps {
  initialFilters: Filters;
}

export default function CatalogClient({ initialFilters }: CatalogClientProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Відстежуємо прокрутку сторінки
  useEffect(() => {
    const handleScroll = () => {
      // Показуємо кнопку, якщо прокрутили більше 500px
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавна прокрутка
    });
  };

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
      <div className={css.list}>
        {data?.pages.map(page =>
          page.campers.map(camper => <CamperCard key={camper.id} camper={camper} />),
        )}
      </div>

      {/* Кнопка "Вгору" */}
      <button
        className={`${css.scrollTop} ${showScrollTop ? css.isVisible : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <Icon id="arrow-up" size={24} />
      </button>

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
