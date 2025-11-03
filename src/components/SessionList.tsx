// src/components/SessionList.tsx
type Item = {
  title: string;         // "Sheila Moore, Mackie Moore"
  dateLabel: string;     // "FRIDAY, MAY 18"

  // New keys
  status?: "TODAY" | "IN 2 DAYS" | string;
  location?: "Online" | "In-house" | string;

  // Legacy keys (fallback support)
  chip?: "TODAY" | "IN 2 DAYS" | string;
  mode?: "Online" | "In-house" | string;

  avatars?: string[];
};

export default function SessionList({
  title,
  items,
  completed = false,
  showDots = true,
}: {
  title: string;
  items: Item[];
  completed?: boolean;
  showDots?: boolean;
}) {
  return (
    <section className="rounded-xl border border-[#E7EDF2] bg-white shadow-[0_1px_0_0_#F4F6F8]">
      {/* header (teal) */}
      <header className="px-5 pt-4">
        <h2 className="text-[15px] font-semibold text-[#19B3AC]">{title}</h2>
        <div className="mt-[10px] h-[3px] rounded bg-[#19B3AC]" />
      </header>

      <ol className="px-5 py-3">
        {items.map((raw, i) => {
          // compatibility mapping
          const status = (raw.status ?? raw.chip)?.toString().toUpperCase();
          const location = raw.location ?? raw.mode;
          const maxAvatars = completed ? 3 : 2;

          return (
            <li
              key={i}
              className="flex items-center gap-3 py-3" // no border => no partitions
            >
              {/* index or check */}
         <div className="w-5 shrink-0 text-[13px] text-gray-500">
  {completed ? (
    <span className="inline-grid h-[16px] w-[16px] place-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#12B6B0"
        className="h-[14px] w-[14px]"
      >
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/>
      </svg>
    </span>
  ) : (
    <span>{i + 1}.</span>
  )}
</div>


              {/* main */}
              <div className="min-w-0 flex-1">
                {/* title */}
                <div className="truncate text-[14px] text-[#0F2437]">{raw.title}</div>

                {/* single-line meta: TODAY · FRIDAY, MAY 18 · Online */}
                <div className="mt-1 flex min-w-0 flex-nowrap items-center gap-3 text-[11px] font-semibold text-[#0F2437]">
                  {status && (
                    <span
                      className={[
                        "inline-flex shrink-0 items-center rounded px-2 py-[3px]",
                      status === "TODAY" || status === "IN 2 DAYS"
  ? "bg-[#19B3AC] text-white"
  : "bg-[#E4F7F4] text-[#19B3AC]"

                      ].join(" ")}
                    >
                      {status}
                    </span>
                  )}

                  <span className="shrink-0">{raw.dateLabel}</span>

                  {location && (
                    <span className="inline-flex shrink-0 items-center gap-1">
                    <svg
  className="w-[14px] h-[14px] text-[#12B6B0]"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="#12B6B0"
>
  <path
    fillRule="evenodd"
    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
    clipRule="evenodd"
  />
</svg>

                      {location}
                    </span>
                  )}
                </div>
              </div>

              {/* avatars (upcoming: 2, completed: up to 3) */}
             {/* avatars (upcoming: 2, completed: up to 3) */}
<div
  className={`flex shrink-0 ${
    completed ? "ml-2" : "ml-4" // 👈 shift right for upcoming sessions
  }`}
>
  <div className="flex -space-x-4">
    {(raw.avatars || [])
      .slice(0, maxAvatars)
      .map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt=""
          className="h-8 w-8 rounded-full border-2 border-white object-cover"
        />
      ))}
  </div>
</div>


  {showDots && (
  <a
    href="#" // 👈 your target link here
    className="ml-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded hover:bg-slate-100 lg:flex"
    aria-label="More details"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-500"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* vertical 3-dot icon */}
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  </a>
)}



            </li>
          );
        })}
      </ol>
    </section>
  );
}
