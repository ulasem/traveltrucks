import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchCampers } from '@/lib/api/api';
import { Filters } from '@/types/filters';
import { Engine, Transmission, VehicleForm } from '@/types/camper';
import CatalogClient from './Catalog.client';

interface CatalogPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const filters: Filters = {
    location: params.location || '',
    form: (params.form as VehicleForm) || '',
    engine: (params.engine as Engine) || '',
    transmission: (params.transmission as Transmission) || '',
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['campers', filters],
    queryFn: () => fetchCampers(filters),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient initialFilters={filters} />
    </HydrationBoundary>
  );
}
