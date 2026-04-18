'use client';

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return <p>Card not found! {error.message}</p>;
}

export default Error;
