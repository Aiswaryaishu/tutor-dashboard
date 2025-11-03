// src/App.tsx
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import SessionList from "./components/SessionList";
import Calendar from "./components/Calendar";
import NoticeBoard from "./components/NoticeBoard";
import NewTutorRequestModal from "./components/NewTutorRequestModal";
import NewTutorBanner from "./components/NewTutorBanner"; // ⬅️ added back
import { completed, upcoming, stats, notices } from "./data/mock";

export default function App() {
  const [open, setOpen] = useState(false);
  const [showReq, setShowReq] = useState(false);
  // Prefix with _ to silence ts(6133) while keeping the variable available if you use it later
  const [_showBanner, setShowBanner] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  // Auto open for mobile after 3s
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const t = setTimeout(() => {
      if (isMobile) setShowReq(true);
      setShowBanner(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  // Lock background scroll on mobile when drawer, request modal, or sheet is open
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const lock = open || (showReq && isMobile) || (showSheet && isMobile);

    const { style } = document.body;
    const prevOverflow = style.overflow;
    const prevPadding = style.paddingRight;

    if (lock) {
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      style.overflow = "hidden";
      if (sbw > 0) style.paddingRight = `${sbw}px`;
    } else {
      style.overflow = prevOverflow;
      style.paddingRight = prevPadding;
    }
    return () => {
      style.overflow = prevOverflow;
      style.paddingRight = prevPadding;
    };
  }, [open, showReq, showSheet]);

  return (
    <div
      id="app-root"
      className="overflow-x-hidden scroll-smooth touch-pan-y"
      style={{ backgroundColor: "#f5f5f5", WebkitOverflowScrolling: "touch" }}
    >
      {/* Header */}
      <Header onMenu={() => setOpen(true)} drawerOpen={open} />

      {/* ===== Desktop Notice Banner (restored) ===== */}
      {_showBanner && (
        <div className="hidden lg:block max-w-[1200px] mx-auto px-4 sm:px-6 pt-4">
          <NewTutorBanner onClose={() => setShowBanner(false)} />
        </div>
      )}

      {/* ===== Mobile Drawer (no overlay gradient) ===== */}
      <div className="lg:hidden">
        <aside
          className={`fixed left-0 top-0 bottom-20 z-50 w-50 bg-white
                      rounded-r-xl shadow-[0_10px_30px_rgba(15,36,55,0.08)]
                      overflow-hidden transform-gpu transition-transform duration-300
                      ${open ? "translate-x-0" : "-translate-x-full"}`}
          aria-label="Mobile navigation"
        >
          <Sidebar active="Overview" onClose={() => setOpen(false)} />
        </aside>

        {/* Close Icon (outside) */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className={`fixed right-5 top-5 z-[60] bg-white rounded-full shadow-md p-1 transition
                     ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ===== MOBILE/TABLET VIEW ===== */}
      <div className="lg:hidden space-y-6 px-6">
        <div className="text-[14px] font-semibold text-[#0F2437]">Tutor Dashboard</div>

        <StatCards stats={stats} />

        {/* Completed first */}
        <div className="border border-[#19B3AC]/40 rounded-xl shadow-sm">
          <SessionList title="Completed Tutorials" items={completed} completed showDots={false} />
        </div>

        {/* Upcoming second */}
        <div className="border border-[#19B3AC]/40 rounded-xl shadow-sm">
          <SessionList title="Upcoming sessions this week" items={upcoming} showDots />
        </div>

        {/* “See Calendar” only when sheet is closed */}
        {!showSheet && (
          <button
            onClick={() => setShowSheet(true)}
            type="button"
            className="mx-auto mb-8 block w-full max-w-[360px] rounded-[10px] bg-[#19B3AC]
                       px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:opacity-95 transition"
          >
            See Calendar
          </button>
        )}
      </div>

      {/* ===== Bottom Sheet (Calendar + Notices) ===== */}
      <div
        className={`fixed inset-x-0 z-50 bg-white rounded-t-2xl border-t border-[#E7EDF2]
                    shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300
                    overflow-y-auto touch-pan-y [WebkitOverflowScrolling:touch]
                    ${showSheet ? "bottom-0 h-[60vh]" : "-bottom-[60vh] h-[60vh]"}
                    lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4">
          {/* Drag handle */}
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-gray-300" />

          {/* Calendar (top) */}
          <div className="rounded-[12px] border border-[#E7EDF2] bg-white p-3 mb-4">
            <Calendar />
          </div>

          {/* Notice Board (below) */}
          <div className="rounded-[12px] border border-[#E7EDF2] bg-white">
            <NoticeBoard items={notices} />
          </div>

          {/* Footer: “Hide Calendar” inside the popup */}
          <button
            onClick={() => setShowSheet(false)}
            type="button"
            className="mt-4 mb-2 mx-auto block w-full max-w-[360px] rounded-[10px] bg-[#19B3AC]
                       px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:opacity-90 transition"
          >
            Hide Calendar
          </button>
        </div>
      </div>

      {/* ===== DESKTOP VIEW (unchanged except NoticeBoard lower) ===== */}
      <div className="hidden lg:grid gap-8 lg:grid-cols-[2.2fr_1fr] max-w-[1200px] mx-auto px-4 sm:px-6 pt-4 pb-12">
        {/* Left Column */}
        <div className="space-y-6">
          <StatCards stats={stats} />
          <div className="grid gap-6 [grid-template-columns:1.1fr_1.1fr]">
            <div className="h-[710px] [&>*]:h-full">
              <SessionList title="Upcoming sessions this week" items={upcoming} showDots />
            </div>
            <div className="h-[710px] [&>*]:h-full">
              <SessionList title="Completed" items={completed} completed showDots={false} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="h-[308px]">
            <Calendar />
          </div>
          {/* Pushed down a bit more on desktop */}
          <div className="h-[620px] mt-25">
            <NoticeBoard items={notices} />
          </div>
        </div>
      </div>

      {/* Mobile Request Modal */}
      <div className="lg:hidden">
        <NewTutorRequestModal open={showReq} onClose={() => setShowReq(false)} />
      </div>
    </div>
  );
}
