'use client';

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return <p>{error.message}</p>;
}

export default Error;
