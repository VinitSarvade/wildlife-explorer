interface PillProps {
  label: string;
}
export default function Pill({ label }: PillProps) {
  return (
    <span className="text-sm bg-wild-50 px-2 py-1 rounded-full border border-wild-400">
      {label}
    </span>
  );
}
