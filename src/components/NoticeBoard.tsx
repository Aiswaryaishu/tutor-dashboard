// src/components/NoticeBoard.tsx
type Item = {
  title: string;
  body: string;
  metaRight?: string;
  strong?: boolean;
};

const TEAL = "#19B3AC";
const TITLE = "#0F2437";
const BODY = "#6E7F90";
const MUTED = "#8FA0B2";
const CARD_BORDER = "#E7EDF2";

export default function NoticeBoard({ items }: { items: Item[] }) {
  return (
    <div
      className="relative rounded-[12px] border bg-white shadow-[0_1px_0_0_#F4F6F8]"
      style={{ borderColor: CARD_BORDER }}
    >
      {/* top teal line (flush to top) */}
      <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ backgroundColor: TEAL }} />

      {/* Header */}
      <div className="px-5 pt-4">
        <div className="flex items-end justify-between">
          <div className="text-[14px] font-semibold" style={{ color: TEAL }}>
            Notice Board
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 py-4">
        <div className="relative pl-8">
          {/* teal line moved slightly left */}
          <div
            className="absolute left-[10px] top-0 bottom-[100px] w-[2px] rounded z-0"
            style={{ backgroundColor: TEAL }}
            aria-hidden="true"
          />

          <ol className="m-0 list-none p-0">
            {items.map((it, i) => {
              const isFirst = i === 0;
              return (
                <li key={i} className="relative mb-6 last:mb-0">
                  {/* smaller dot (8x8) and shifted left */}
                  <span
                    className={[
                      "absolute top-[-px] left-[-21px] -translate-x-1/2 z-10",
                      "h-[10px] w-[10px] rounded-full",
                      isFirst ? "bg-[#19B3AC]" : "bg-white ring-2 ring-[#19B3AC]",
                    ].join(" ")}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[13px] leading-[1.2]">
                        <span
                          className={it.strong ? "font-semibold" : "font-medium"}
                          style={{ color: TITLE }}
                        >
                          {it.title}
                        </span>
                      </div>

                      {/* ✅ Action grey → teal on hover, Just Now bold */}
                    <p
  className="mt-1 text-[12px] leading-5"
  style={{ color: BODY }}
  dangerouslySetInnerHTML={{
    __html: it.body
      .replace(
        /Action/gi,
        `<span style="color:${BODY}; text-decoration:underline; cursor:pointer;" onmouseover="this.style.color='${TEAL}'" onmouseout="this.style.color='${BODY}'">Action</span>`
      )
      .replace(
        /Just Now/gi,
        `<strong style="color:${MUTED}; font-weight:600;">Just Now</strong>`
      ),
  }}
/>

                    </div>

{it.metaRight && (
  <span
    className={`shrink-0 text-[11px] ${
      /just now/i.test(it.metaRight) ? "font-semibold" : ""
    }`}
    style={{ color: /just now/i.test(it.metaRight) ? "#000000" : MUTED }}
  >
    {it.metaRight}
  </span>
)}

                  </div>
                </li>
              );
            })}
          </ol>

          <a
            href="#"
            className="mt-8 ml-[-30px] inline-flex items-center gap-1 text-[12px]"
            style={{ color: TEAL }}
          >
            Go to notifications <span>▾</span>
          </a>
        </div>
      </div>
    </div>
  );
}
