import { notFound } from 'next/navigation';
import { fetchCamperById, fetchCamperReviews } from '@/lib/api/api';
import { Camper } from '@/types/camper';
import { Review } from '@/types/review';
import CardDetailsClient from './CardDetails.client';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CamperDetailsPage({ params }: Props) {
  const { id } = await params;

  let camper: Camper | null = null;
  let reviews: Review[] = [];

  try {
    const [camperData, reviewsData] = await Promise.all([
      fetchCamperById(id),
      fetchCamperReviews(id),
    ]);

    camper = camperData;
    reviews = reviewsData;
  } catch (error) {
    console.error('Fetch error:', error);
    return notFound();
  }

  if (!camper) {
    return notFound();
  }

  return (
    <main>
      <CardDetailsClient camper={camper} reviews={reviews} />
    </main>
  );
}
