// src/data/mock.ts

// For StatCards
export const stats = [
  {
    label: "Upcoming Tutorials",
    value: 14,
    color: "#009ca6", // teal blue
  },
  {
    label: "Number of Tutorial Hours Tracked Last Month",
    value: 65,
    color: "#57e2f3", // light aqua
  },
  {
    label: "Pending Tutorial Requests",
    value: 6,
    color: "#b0b0b0", // gray
  },
];

// For SessionList (Upcoming / Completed)
export const upcoming = [
  {
    id: 1,
    title: "Sheila Moore, Mackle Moore",
    dateLabel: "FRIDAY, MAY 18",
    mode: "Online" as const,
    chip: "TODAY" as const,
    avatars: [
      "https://i.pravatar.cc/36?img=11",
      "https://i.pravatar.cc/36?img=12",
      "https://i.pravatar.cc/36?img=13",
    ],
  },
  {
    id: 2,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",
    mode: "In-house" as const,
    chip: "TODAY" as const,
    avatars: ["https://i.pravatar.cc/36?img=14"],
  },
  {
    id: 3,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",
    mode: "Online" as const,
    chip: "IN 2 DAYS" as const,
    avatars: ["https://i.pravatar.cc/36?img=15"],
  },
];

// src/data/mock.ts
export const completed = [
  {
    id: 101,
    title: "Sheila Moore, Mackle Moore",
    dateLabel: "FRIDAY, MAY 18",
   mode: "Online" as const,
// … (do this for all six items)

    avatars: [
      "https://i.pravatar.cc/48?img=11",
      "https://i.pravatar.cc/48?img=12",
    ],
  },
  {
    id: 102,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",

mode: "In-house" as const,
// … (do this for all six items)

    avatars: [
      "https://i.pravatar.cc/48?img=13",
      "https://i.pravatar.cc/48?img=14",
    ],
  },
  {
    id: 103,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",
 // …
mode: "Online" as const,
    avatars: [
      "https://i.pravatar.cc/48?img=15",
      "https://i.pravatar.cc/48?img=16",
    ],
  },
  {
    id: 104,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",
   // …
mode: "Online" as const,
    avatars: [
      "https://i.pravatar.cc/48?img=17",
      "https://i.pravatar.cc/48?img=18",
    ],
  },
  {
    id: 105,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",
// …
mode: "Online" as const,
    avatars: [
      "https://i.pravatar.cc/48?img=19",
      "https://i.pravatar.cc/48?img=20",
    ],
  },
  {
    id: 106,
    title: "John F Kennedy, | Grade 3 Maths",
    dateLabel: "FRIDAY, MAY 18",
// …
mode: "Online" as const,
    avatars: [
      "https://i.pravatar.cc/48?img=21",
      "https://i.pravatar.cc/48?img=22",
    ],
  },
];


// For NoticeBoard
export const notices = [
  {
    title: "Rescheduled Session",
    body:
      "This session has been rescheduled to 16th August, 2020 by student. Action",
    metaRight: "Just Now",
    strong: true,
  },
  {
    title: "John Manor (Student)",
    body:
      "I have an engagement on your proposed date. Could we reschedule?",
    metaRight: "Aug 10, 2020",
  },
  {
    title: "Admin",
    body: "Tutorial commences in 30mins. Get ready.",
    metaRight: "Aug 10, 2020",
  },
  {
    title: "Admin",
    body: "Tutorial commences in 30mins. Get ready.",
    metaRight: "Aug 10, 2020",
  },
];



