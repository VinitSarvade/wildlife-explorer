import { ReactNode } from 'react';

import { ThumbsDown, ThumbsUp } from 'lucide-react';

import { cn } from '@utils/cn';
import { titleCase } from '@utils/titlecase';

interface DetailsGridSectionProps {
  title: string;
  titleIcon?: ReactNode;
  entries: [key: string, value: string][];
  gridClassName?: string;
  keyPreferences?: Record<string, -1 | 1>;
  onKeyPreferenceClick: (name: string) => (action: -1 | 1) => void;
}

export default function DetailsGridSection({
  entries,
  title,
  titleIcon,
  gridClassName,
  keyPreferences,
  onKeyPreferenceClick,
}: DetailsGridSectionProps) {
  const handleChoosePreference = (name: string) => (action: -1 | 1) => () => {
    onKeyPreferenceClick(name)(action);
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 text-wild-600 mb-2">
        {titleIcon}
        {title}
      </h2>
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-x-10',
          gridClassName,
        )}
      >
        {entries.map(([key, value]) => {
          const isLiked = keyPreferences?.[key] === 1;
          const isDisliked = keyPreferences?.[key] === -1;
          const likedIconProps = isLiked ? { fill: '#777' } : {};
          const dislikedIconProps = isDisliked ? { fill: '#777' } : {};
          return (
            <div
              key={key}
              className="py-2 text-sm md:text-base border-b border-zinc-300 flex items-center justify-between"
            >
              <div>
                <span className="font-semibold">{titleCase(key)}:&nbsp;</span>
                <span>{value}</span>
              </div>
              <div className="flex gap-3 text-zinc-300">
                <div
                  className={cn('pointer block', isLiked && 'text-zinc-700')}
                  onClick={handleChoosePreference(key)(1)}
                >
                  <ThumbsUp
                    aria-label={`${key}-like`}
                    size={18}
                    {...likedIconProps}
                  />
                </div>
                <div
                  className={cn('pointer block', isDisliked && 'text-zinc-700')}
                  onClick={handleChoosePreference(key)(-1)}
                >
                  <ThumbsDown
                    aria-label={`${key}-dislike`}
                    size={18}
                    {...dislikedIconProps}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
