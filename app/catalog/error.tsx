'use client';

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return <p>Could not fetch the list of cards. {error.message}</p>;
}

export default Error;
