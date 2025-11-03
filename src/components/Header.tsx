import { useState, useRef, useEffect } from "react";

type Props = { onMenu: () => void; drawerOpen?: boolean };

const SW = 1.25;

/* ===== ICONS (unchanged) ===== */
const IcGrid = ({ active = false }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       className={active ? "text-[#16b6b0]" : "text-gray-600"}>
    <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1.4" />
      <rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.75" y="13.75" width="6.5" height="6.5" rx="1.4" />
    </g>
  </svg>
);

const IcList = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-500">
    <path d="M9 6h10M9 12h10M9 18h10" stroke="currentColor" strokeWidth={SW} strokeLinecap="round"/>
    <path d="M5 6h.01M5 12h.01M5 18h.01" stroke="currentColor" strokeWidth={SW} strokeLinecap="round"/>
  </svg>
);

const IcBell = ({ className = "" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className || "text-gray-500"}>
    <path d="M16 17H6l1.2-1.6A6 6 0 0 0 8 12V9a4.5 4.5 0 1 1 9 0v3c0 1.1.36 2.2 1 3.1L18 17h-2Z"
          stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.2 20a1.8 1.8 0 0 0 3.6 0" stroke="currentColor" strokeWidth={SW} strokeLinecap="round"/>
  </svg>
);

const IcPlay = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-500">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth={SW}/>
    <path d="M11 10.5l4 2.5-4 2.5v-5Z" fill="currentColor"/>
  </svg>
);

const IcBoard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-500">
    <rect x="3.75" y="5" width="16.5" height="11" rx="1.5" stroke="currentColor" strokeWidth={SW}/>
    <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth={SW} strokeLinecap="round"/>
  </svg>
);

const IcUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-500">
    <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth={SW}/>
    <path d="M5.5 19a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth={SW} strokeLinecap="round"/>
  </svg>
);

export default function Header({ onMenu, drawerOpen }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur">
      {/* ROW 1 — logo / top links / hello+bell */}
      <div className="border-b border-[#E9EDF1]">
        <div
          className="
            relative
            mx-auto max-w-screen-xl
            h-[72px]
            px-4 sm:px-6 xl:px-20
            grid items-center
            grid-cols-[auto_1fr_auto]
            xl:grid-cols-[260px_1fr_260px]
            gap-3 md:gap-4
          "
        >
          {/* Left (logo + text) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
              <span className="text-[16px] font-extrabold text-black tracking-[0.3px]">
                LOREMLOGO
              </span>
            </div>
          </div>

          {/* Middle — hidden on tablet, visible only on big desktop */}
          <nav
            className="
              hidden xl:flex items-center gap-10 text-[15px] text-gray-700 font-bold
            "
            aria-label="Top Navigation"
          >
            <a className="hover:text-gray-900" href="#">K-12 Videos</a>
            <a className="hover:text-gray-900" href="#">Podcasts</a>
            <a className="hover:text-gray-900" href="#">FAQs</a>
            <a className="hover:text-gray-900" href="#">Help and Support</a>
          </nav>

          {/* Right (Hello, Victor + Bell) */}
          <div
  className="
    hidden
    md:flex            /* show on ≥768px */
    xl:flex            /* show again on ≥1280px */
    items-center justify-end gap-4 xl:gap-6 relative flex-shrink-0
    md:max-xl:hidden   /* hide between 768 – 1279 px */
  "
  ref={menuRef}
>
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setOpen(!open)}>
              <div className="h-9 w-9 rounded-full bg-[#16b6b0] text-white grid place-items-center text-[12px] font-semibold">V</div>
              <span className="text-[15px] text-gray-700 flex items-center gap-1">
                Hello, <span className="font-medium">Victor</span>
                <span className="text-[#16b6b0] align-middle">▾</span>
              </span>
            </div>

            {open && (
              <div className="absolute right-0 top-[60px] w-[160px] rounded-md border border-gray-200 bg-white shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#e8f9f8] hover:text-[#16b6b0]">Profile</a>
                <a href="#" className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#e8f9f8] hover:text-[#16b6b0]">Settings</a>
                <hr className="my-1 border-gray-200" />
                <a href="#" className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#e8f9f8] hover:text-[#16b6b0]">Logout</a>
              </div>
            )}

            <button aria-label="Notifications" className="relative grid place-items-center h-10 w-10 rounded-md hover:bg-gray-100">
              <IcBell className="text-[#16b6b0]" />
              <span className="absolute -right-[6px] -top-[6px] h-[18px] min-w-[18px] px-[4px] rounded-full bg-red-500 text-white text-[10px] leading-[18px] text-center">4</span>
            </button>
          </div>

          {/* Hamburger — show on mobile AND tablet; hide only on big desktop */}
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className={`
              xl:hidden absolute right-4 top-1/2 -translate-y-1/2
              grid place-items-center h-10 w-10 rounded-md hover:bg-gray-100
              ${drawerOpen ? "invisible" : ""}
            `}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ROW 2 (Tabs) — hide on tablet, show only on big desktop */}
      <div
        className="
          hidden xl:grid
          relative
          mx-auto max-w-screen-xl
          h-[56px]
          px-4 sm:px-6 xl:px-20
          items-center
          grid-cols-[auto_1fr_auto]
          xl:grid-cols-[260px_1fr_260px]
        "
      >
        <div className="flex items-center whitespace-nowrap">
          <span className="text-[15px] font-semibold text-gray-800">Tutor Dashboard</span>
        </div>

        <div className="flex items-center">
          <nav className="flex items-center gap-7 text-[15px] ml-2 xl:ml-4">
            <a className="relative flex items-center gap-2 text-[#16b6b0] font-medium pb-0" href="#" aria-current="page">
              <IcGrid active /> Overview
              <span className="absolute left-2 right-0 bottom-[-15px] h-[4px] rounded bg-[#16b6b0]" />
            </a>
            <a className="group relative flex items-center gap-2 text-gray-600 hover:text-[#16b6b0] pb-0" href="#">
              <IcList /> Sessions
              <span className="pointer-events-none absolute left-2 right-0 bottom-[-15px] h-[4px] rounded bg-[#16b6b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
            </a>
            <a className="group relative flex items-center gap-2 text-gray-600 hover:text-[#16b6b0] pb-0" href="#">
              <IcBell /> Notifications
              <span className="pointer-events-none absolute left-2 right-0 bottom-[-15px] h-[4px] rounded bg-[#16b6b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
            </a>
            <a className="group relative flex items-center gap-2 text-gray-600 hover:text-[#16b6b0] pb-0" href="#">
              <IcPlay /> Media
              <span className="pointer-events-none absolute left-2 right-0 bottom-[-15px] h-[4px] rounded bg-[#16b6b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
            </a>
            <a className="group relative flex items-center gap-2 text-gray-600 hover:text-[#16b6b0] pb-0" href="#">
              <IcBoard /> Whiteboard
              <span className="pointer-events-none absolute left-2 right-0 bottom-[-15px] h-[4px] rounded bg-[#16b6b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
            </a>
            <a className="group relative flex items-center gap-2 text-gray-600 hover:text-[#16b6b0] pb-0" href="#">
              <IcUser /> Account
              <span className="pointer-events-none absolute left-2 right-0 bottom-[-15px] h-[4px] rounded bg-[#16b6b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
            </a>
          </nav>
        </div>

        <div />
      </div>
    </header>
  );
}
