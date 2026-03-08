import React from 'react';
import ResumeTemplate from './ResumeTemplate';

export const ResumeHiddenContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
      <ResumeTemplate ref={ref} />
    </div>
  );
});

ResumeHiddenContainer.displayName = 'ResumeHiddenContainer';
