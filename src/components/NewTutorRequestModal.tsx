
type Props = {
  open: boolean;
  onClose: () => void;
};

export default function NewTutorRequestModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      {/* Light overlay */}
      <div className="fixed inset-0 z-40 bg-black/10 lg:hidden" />

      {/* Popup card */}
      <div
        className="
          lg:hidden
          fixed left-0 right-0 top-[70px] z-50 px-4
        "
      >
        <div
          className="
            relative w-full rounded-[12px] border border-[#E7EDF2] bg-white
            shadow-[0_10px_25px_rgba(0,0,0,0.12)]
            p-4
          "
        >
          {/* Close icon — plain (no round bg) */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-3 text-gray-700 hover:text-black"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop"
              alt="Client"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="text-[15px] font-semibold text-[#16B6B0]">
                New Tutor Request
              </div>
              <div className="mt-2 space-y-1 text-[13px] text-gray-700">
                <div>
                  <span className="text-gray-500">Client:</span>{" "}
                  Sheila Pratt
                </div>
                <div>
                  <span className="text-gray-500">Date:</span>{" "}
                  20 August, 2020
                </div>
                <div>
                  <span className="text-gray-500">Time:</span>{" "}
                  8:00AM – 10:00AM
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-3 h-px bg-[#E7EDF2]" />

          {/* Action buttons */}
          <div className="flex justify-around text-center">
            {/* Accept */}
            <button
              onClick={onClose}
              className="flex flex-col items-center gap-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[16px] w-[16px] text-[#19B3AC]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  d="M20 7l-9 9-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[13px] font-medium text-[#19B3AC]">
                Accept
              </span>
            </button>

            {/* Decline */}
            <button
              onClick={onClose}
              className="flex flex-col items-center gap-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[16px] w-[16px] text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
              <span className="text-[13px] font-medium text-red-500">
                Decline
              </span>
            </button>

            {/* Propose new time */}
            <button
              onClick={onClose}
              className="flex flex-col items-center gap-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[16px] w-[16px] text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <circle cx="12" cy="12" r="8" />
                <path
                  d="M12 7v5l3 2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[13px] font-medium text-gray-700">
                Propose new<br />time
              </span>
            </button>
          </div>
        </div>

        {/* Teal bar below card */}
        <div className="mx-auto mt-3 h-[4px] w-[85%] rounded bg-[#12B6B0]" />
      </div>
    </>
  );
}
