// src/components/NewTutorBanner.tsx
type Props = { onClose?: () => void };

const Tw = {
  teal: "#16b6b0",
  aquaBg: "#EAF9F9",
  aquaBorder: "#D7F0EF",
  red: "#E65757",
  grayIcon: "#6B778C",
};

/* --- Icons --- */
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M4 12.5l5 5 11-11" stroke={Tw.teal} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CrossIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke={Tw.red} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.8" stroke={Tw.grayIcon} strokeWidth="1.8" />
    <path d="M12 7.6V12l3.2 1.9" stroke={Tw.grayIcon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
    <path
      fill={Tw.teal}
      d="M47.71 17.18 31.89 1.37a1 1 0 0 0-1.41 0L29 2.81a3 3 0 0 0-.46 3.67A21 21 0 0 1 17 16.75a4.06 4.06 0 0 0-5.2.43l-2.16 2.16a1 1 0 0 0 0 1.41l7.2 7.2L.29 44.5a1 1 0 0 0 .57 1.69c5.48.79 5.06.73 5.17.73.6 0-.62 1 15.1-14.68 7.76 7.77 7.32 7.49 7.9 7.49s.52-.1 2.86-2.44a4 4 0 0 0 .44-5.2A20.89 20.89 0 0 1 42.6 20.5a3 3 0 0 0 3.67-.5l1.44-1.44a1 1 0 0 0 0-1.38zm-42 27.68-2.59-.36 15.13-15.13 1.46 1.46zm24.8-9L29 37.32 11.76 20.05l1.45-1.45a2.05 2.05 0 0 1 2.9 0L30.48 33a2.05 2.05 0 0 1 0 2.87zm.32-5.41L18.62 18.28A22.9 22.9 0 0 0 30 8.07l11 11a22.9 22.9 0 0 0-10.2 11.39zm14.03-11.83a1.05 1.05 0 0 1-1.47 0L30.46 5.68a1 1 0 0 1 0-1.46l.73-.73 14.4 14.4z"
    />
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function NewTutorBanner({ onClose }: Props) {
  return (
    <div
      className="relative border px-5 md:px-6"
      style={{ background: Tw.aquaBg, borderColor: Tw.aquaBorder }} // square corners, subtle border
    >
      <div className="flex items-center justify-between py-4 md:py-5">
        {/* Left — Client Info (nudged a little to the right) */}
        <div className="flex items-center gap-4 ml-2">
          <img
            src="https://i.pravatar.cc/64?img=5"
            alt="Client avatar"
            className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover"
          />
          <div className="min-w-0">
            <div className="text-[15px] md:text-[16px] font-semibold" style={{ color: Tw.teal }}>
              Tutor Request
            </div>
            <div className="mt-[2px] flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-[#65707F]">
              <span>
                Client: <span className="text-[#0F1B2D]">Sheila Pratt</span>
              </span>
              <span>
                Date: <span className="text-[#0F1B2D]">16 August, 2020</span>
              </span>
              <span>
                Time: <span className="text-[#0F1B2D]">8:00AM - 10:00AM</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right — Actions (nudged a little to the left) */}
        <div className="hidden lg:flex items-center gap-8 pr-2 -translate-x-1">
          <button className="group grid place-items-center gap-1 text-center">
            <CheckIcon />
            <span className="text-[13px] font-semibold" style={{ color: Tw.teal }}>
              Accept
            </span>
          </button>

          <button className="group grid place-items-center gap-1 text-center">
            <CrossIcon />
            <span className="text-[13px] font-semibold" style={{ color: Tw.red }}>
              Decline
            </span>
          </button>

          <button className="group grid place-items-center gap-1 text-center">
            <ClockIcon />
            <span className="text-[13px] text-[#2D3748]">Propose new time</span>
          </button>

          <button className="group grid place-items-center gap-1 text-center">
            <PinIcon />
            <span className="text-[13px] font-semibold" style={{ color: Tw.teal }}>
              Mark as tentative
            </span>
          </button>
        </div>

        {/* Close button — slightly further right & up */}
        <button
          onClick={onClose}
          className="absolute right-2 md:right-3 -top-1 grid place-items-center rounded-md p-1 hover:bg-black/5"
          aria-label="Close tutor request"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Mobile actions (stacked) */}
      <div className="lg:hidden grid grid-cols-4 gap-2 pb-4 -mt-1 text-center">
        <button className="grid place-items-center gap-1">
          <CheckIcon />
          <span className="text-[12px] font-semibold" style={{ color: Tw.teal }}>
            Accept
          </span>
        </button>
        <button className="grid place-items-center gap-1">
          <CrossIcon />
          <span className="text-[12px] font-semibold" style={{ color: Tw.red }}>
            Decline
          </span>
        </button>
        <button className="grid place-items-center gap-1">
          <ClockIcon />
          <span className="text-[12px] text-[#2D3748]">Propose</span>
        </button>
        <button className="grid place-items-center gap-1">
          <PinIcon />
          <span className="text-[12px] font-semibold" style={{ color: Tw.teal }}>
            Tentative
          </span>
        </button>
      </div>
    </div>
  );
}
