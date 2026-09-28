// Central business config — update here and it reflects across the entire site
export const SITE = {
  name: "Ember Lane",
  tagline: "Wood-fired · Old Quarter · Since 2016",
  description:
    "A wood-fired neighbourhood kitchen in the Old Quarter. One oak-burning hearth, a menu that changes with the market, and forty-two seats.",
  phone: { display: "555 0188", href: "tel:+15550188" },
  email: "book@emberlane.example",
  address: { line1: "27 Ember Lane", line2: "Old Quarter", short: "27 Ember Lane, Old Quarter" },
  directions: "Down the alley beside the old post office. There is no sign — look for the smoke and the orange light.",
  access:
    "Street parking after 6pm. Two minutes from the Quarter tram stop. The room is fully step-free, and the eight hearth seats are held for walk-ins every night.",
  topbarNote: "Kitchen open Tuesday to Sunday from 5pm · Walk-ins welcome at the bar",
  // `days` uses JavaScript's getDay(): 0 = Sunday … 6 = Saturday
  hours: [
    { label: "Monday", days: [1], time: "Closed" },
    { label: "Tuesday – Thursday", days: [2, 3, 4], time: "5:00 – 10:30 pm" },
    { label: "Friday – Saturday", days: [5, 6], time: "5:00 – 11:30 pm" },
    { label: "Weekend lunch", days: [], time: "Sat & Sun 12:00 – 3:00 pm" },
    { label: "Sunday dinner", days: [0], time: "5:00 – 9:30 pm" },
  ],
};
