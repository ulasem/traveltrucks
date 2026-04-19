import React from 'react';

interface IconProps {
  id:
    | 'logo'
    | 'map'
    | 'alcove'
    | 'automatic'
    | 'petrol'
    | 'rating'
    | 'rating-default'
    | 'arrow-up'
    | 'search';
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ id, size = 20, width, height, className }) => {
  return (
    <svg width={width || size} height={height || size} className={className} aria-hidden="true">
      <use href={`/icons/sprite.svg#icon-${id}`} />
    </svg>
  );
};

export default Icon;
