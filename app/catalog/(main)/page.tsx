import { Metadata } from 'next'; // Імпортуємо тип
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchCampers } from '@/lib/api/api';
import { Filters } from '@/types/filters';
import { Engine, Transmission, VehicleForm } from '@/types/camper';
import CatalogClient from './Catalog.client';

export const metadata: Metadata = {
  title: 'Catalog | CamperRental',
  description:
    'Explore our wide range of campers and motorhomes for rent. Find the perfect vehicle for your next road trip with easy filtering by location, engine type, and equipment.',
  keywords: ['camper rental', 'rent motorhome', 'van life', 'travel campers'],
  openGraph: {
    title: 'Explore Our Camper Collection | CamperRental',
    description: 'Find your dream camper in our catalog. Flexible filters and best prices.',
    type: 'website',
  },
};

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
