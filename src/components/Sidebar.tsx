// src/components/Sidebar.tsx
type Props = {
  active?: string;
  onClose?: () => void;
};

const NavItem = ({
  label,
  active,
  children,
}: {
  label: string;
  active?: boolean;
  children: React.ReactNode;
}) => (
  <button
    className={[
      "flex w-full items-center gap-3 rounded-md px-3 py-2 transition",
      active ? "text-[#16b6b0]" : "text-gray-700 hover:bg-gray-100",
    ].join(" ")}
    aria-current={active ? "page" : undefined}
  >
    <span
      className={[
        "grid h-7 w-7 place-items-center rounded-md border text-[13px]",
        active
          ? "border-[#BFEDEA] text-[#16b6b0] bg-[#EAF9F8]"
          : "border-gray-200 text-gray-600",
      ].join(" ")}
    >
      {children}
    </span>
    <span
      className={[
        "text-[14px]",
        active ? "font-semibold text-[#16b6b0]" : "text-gray-800",
      ].join(" ")}
    >
      {label}
    </span>
  </button>
);

export default function Sidebar({ active = "Overview" }: Props) {
  return (
    // Height trimmed only at bottom to leave a neat gap (matches screenshot)
    <div className="h-[calc(100vh-16px)] w-[300px] bg-white rounded-r-xl shadow-[0_10px_30px_rgba(15,36,55,0.08)]">
      {/* Header: logo */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="LOREMLOGO"
            className="h-6 w-6 rounded-md object-contain"
          />
          <div className="text-[14px] font-extrabold tracking-[0.2px] text-black">
            LOREMLOGO
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="mt-4 px-4">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[#16b6b0] text-white text-[13px]">
            V
          </div>
          <div className="text-[14px] text-gray-700">
            Hello, <span className="font-medium text-gray-900">Victor</span>
            <span className="ml-1 align-middle text-gray-500">▾</span>
          </div>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="mt-5 space-y-1 px-3">
        <NavItem label="Overview" active={active === "Overview"}>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="4" y="4" width="6" height="6" rx="1.4" />
            <rect x="14" y="4" width="6" height="6" rx="1.4" />
            <rect x="4" y="14" width="6" height="6" rx="1.4" />
            <rect x="14" y="14" width="6" height="6" rx="1.4" />
          </svg>
        </NavItem>

        <NavItem label="Sessions" active={active === "Sessions"}>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M4 7h16M4 12h13M4 17h10" />
          </svg>
        </NavItem>

        <NavItem label="Notifications" active={active === "Notifications"}>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.5-1.5A2 2 0 0 1 18 14v-3a6 6 0 1 0-12 0v3a2 2 0 0 1-.5 1.5L4 17h5m6 0a3 3 0 1 1-6 0"
            />
          </svg>
        </NavItem>

        <NavItem label="Media" active={active === "Media"}>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M11 9l4 3-4 3V9z" />
          </svg>
        </NavItem>

        <NavItem label="Whiteboard" active={active === "Whiteboard"}>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M8 20h8" />
          </svg>
        </NavItem>

        <NavItem label="Account" active={active === "Account"}>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="8" r="3" />
            <path d="M6 19c0-3 3-5 6-5s6 2 6 5" />
          </svg>
        </NavItem>
      </nav>

      {/* Secondary links */}
      <div className="mt-6 space-y-3 px-6">
        <a
          className="block text-[14px] text-gray-800 font-medium hover:text-gray-900"
          href="#"
        >
          K-12 Videos
        </a>
        <a
          className="block text-[14px] text-gray-800 font-medium hover:text-gray-900"
          href="#"
        >
          Podcasts
        </a>
        <a
          className="block text-[14px] text-gray-800 font-medium hover:text-gray-900"
          href="#"
        >
          FAQs
        </a>
        <a
          className="block text-[14px] text-gray-800 font-medium hover:text-gray-900"
          href="#"
        >
          Help and Support
        </a>
      </div>
    </div>
  );
}
