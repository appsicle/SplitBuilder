import React, { forwardRef } from 'react';

export const Item = forwardRef(({ id }: { id: number }, ref) => {
  return <div ref={ref}>{id}</div>;
});
