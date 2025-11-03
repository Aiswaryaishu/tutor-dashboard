type Stat = {
  label: string;
  value: string | number;
  color: string;
};

type Props = {
  stats: Stat[];
};

export default function StatCards({ stats }: Props) {
  return (
    <div
      className="
        grid gap-5
        sm:grid-cols-2
        lg:grid-cols-3
        w-full
      "
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="
            flex flex-col justify-between
            rounded-[12px]
            px-6 py-4
            text-white
            shadow-sm
            transition-transform
            hover:scale-[1.015]
            duration-300
            min-h-[110px]
          "
          style={{ backgroundColor: s.color }}
        >
          {/* Title */}
          <div className="text-[13px] font-semibold leading-tight opacity-90">
            {s.label}
          </div>

          {/* Number (aligned across all cards) */}
          <div className="mt-auto flex items-end">
            <span className="text-[32px] font-semibold leading-none tracking-tight">
              {s.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
