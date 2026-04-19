import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchCamperById, fetchCamperReviews } from '@/lib/api/api';
import { Camper } from '@/types/camper';
import { Review } from '@/types/review';
import CardDetailsClient from './CardDetails.client';

interface CamperDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CamperDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const camper = await fetchCamperById(id);
    if (!camper) return { title: 'Camper not found' };

    const title = camper.name || 'Camper Details';
    const description = camper.description
      ? camper.description.slice(0, 160)
      : 'Explore our premium camper rentals for your next adventure.';
    const mainImage = camper.gallery?.[0]?.original || '/default-og-image.png';

    return {
      title: `${title} | CamperRental`,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: mainImage }],
      },
    };
  } catch {
    return { title: 'Camper Details' };
  }
}

export default async function CamperDetailsPage({ params }: CamperDetailsPageProps) {
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

  if (!camper) return notFound();

  return (
    <main>
      <article>
        <CardDetailsClient camper={camper} reviews={reviews} />
      </article>
    </main>
  );
}
