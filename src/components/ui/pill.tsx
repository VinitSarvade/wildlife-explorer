import { useCallback } from 'react';

interface PillProps {
  label: string;
  onClick: (label: string) => void;
}
export default function Pill({ label, onClick }: PillProps) {
  const handleClick = useCallback(() => {
    onClick(label);
  }, [label, onClick]);

  return (
    <div
      className="text-sm bg-wild-50 capitalize px-2 py-1 rounded-full border border-wild-400 cursor-pointer hover:bg-wild-100"
      onClick={handleClick}
    >
      {label}
    </div>
  );
}
