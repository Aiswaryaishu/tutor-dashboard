// src/components/Calendar.tsx
import { useMemo, useState } from "react";

const WEEKDAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const DOT_ABOVE_DAYS = new Set<number>([31, 7, 9]);
const mondayIndex = (jsDay: number) => (jsDay + 6) % 7;

export default function Calendar() {
  const [viewYear, setViewYear] = useState(2020);
  const [viewMonth, setViewMonth] = useState(7);
  const [selectedIdxs, setSelectedIdxs] = useState<Set<number>>(new Set());

  const isMarkedMonth = viewYear === 2020 && viewMonth === 7;

  const { cells, title } = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

    const offset = mondayIndex(first.getDay());
    const grid: { day: number; current: boolean }[] = [];

    for (let i = offset - 1; i >= 0; i--) grid.push({ day: daysInPrev - i, current: false });
    for (let d = 1; d <= daysInMonth; d++) grid.push({ day: d, current: true });
    const minCells = grid.length <= 35 ? 35 : 42;
    let next = 1;
    while (grid.length < minCells) grid.push({ day: next++, current: false });

    return { cells: grid, title: `${MONTHS[viewMonth]} ${viewYear}` };
  }, [viewYear, viewMonth]);

  const handlePrev = () => {
    const m = viewMonth - 1;
    if (m < 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth(m);
    setSelectedIdxs(new Set());
  };

  const handleNext = () => {
    const m = viewMonth + 1;
    if (m > 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth(m);
    setSelectedIdxs(new Set());
  };

  const toggleIdx = (i: number) => {
    setSelectedIdxs((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="rounded-none bg-white border border-[#E7EDF2] p-6 pb-8 shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrev} className="text-gray-500 hover:text-[#12B6B0] text-lg" aria-label="Previous month">
          &#10094;
        </button>
        <div className="text-[16px] font-semibold text-gray-800">
          {title.split(" ")[0]}{" "}
          <span className="font-bold text-gray-900">{title.split(" ")[1]}</span>
        </div>
        <button onClick={handleNext} className="text-gray-500 hover:text-[#12B6B0] text-lg" aria-label="Next month">
          &#10095;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-[13px] font-semibold text-gray-500 mb-2 text-center">
        {WEEKDAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 text-center text-[13px] text-gray-700 leading-[2.2] mb-4">
        {cells.map(({ day, current }, i) => {
          const isSelected = selectedIdxs.has(i);

          let textClass = "text-gray-400";
          if (current) {
            textClass = isSelected
              ? "text-[#12B6B0] font-bold"
              : "text-gray-700";
          }

          return (
            <div
              key={`${viewYear}-${viewMonth}-${i}`}
              className="relative flex flex-col items-center justify-center h-10 cursor-pointer"
              onClick={() => toggleIdx(i)}
            >
              {current && isMarkedMonth && DOT_ABOVE_DAYS.has(day) && (
                <span className="absolute top-[2px] w-[4px] h-[4px] rounded-full bg-[#12B6B0]" />
              )}

              <span className={`inline-block w-6 h-6 leading-6 rounded-full ${textClass}`}>
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
