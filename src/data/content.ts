// Page copy lives here so a new client can be set up without touching components.
// Wrap words in *asterisks* to render them in bold ember.

export const NAV = [
  { href: "#fire", label: "The fire" },
  { href: "#menu", label: "Menu" },
  { href: "#room", label: "The room" },
  { href: "#events", label: "Private dining" },
  { href: "#reserve", label: "Find us" },
];

export const HERO = {
  headline: "Everything here meets the *fire* first.",
  sub: "One oak-burning hearth, a menu that changes when the market does, and forty-two seats. No gas, no shortcuts, no second sittings rushed out the door.",
  strip: [
    { strong: "42", rest: "seats" },
    { strong: "Oak & manuka", rest: "only" },
    { strong: "Tue – Sun", rest: "from 5pm" },
    { strong: "Walk-ins", rest: "at the bar" },
  ],
};

export const TONIGHT = {
  label: "On the fire tonight",
  dish: "Whole market fish, salt-crusted, fennel and burnt lemon — for two",
  price: "$78",
};

export const FIRE = {
  headline: "We light it at *seven in the morning*.",
  paragraphs: [
    "By the time the first table sits down, the hearth has been burning for ten hours and the oven floor is holding 320°C. That long, slow build is the whole point — it is what gives a leek its sweetness and a shoulder of lamb eight hours of gentle smoke.",
    "Everything that reaches your table has been over flame or in the embers. The vegetables as seriously as the meat: we have had whole roasted celeriac on the menu since the first week and it has outsold the steak more than once.",
  ],
  credit: "Anna Brakes cooked in Basque country for six years before opening Ember Lane with her brother Tomas in 2016.",
};

export type MenuItem = { name: string; tag?: string; price: string; desc: string };
export type MenuTab = { id: string; label: string; courses: { title: string; items: MenuItem[] }[] };

export const MENU_INTRO = {
  headline: "The menu changes *most weeks*.",
  lede: "What follows is this week's. If something has sold out by the time you sit down, we'll have cooked something better with what came in that morning.",
};

export const MENU: MenuTab[] = [
  {
    id: "dinner",
    label: "Dinner",
    courses: [
      {
        title: "From the embers — to start",
        items: [
          { name: "Grilled flatbread", tag: "V", price: "$12", desc: "Cultured butter, burnt honey, wild thyme" },
          { name: "Charred leeks", tag: "V", price: "$18", desc: "Romesco, toasted hazelnut, aged sherry vinegar" },
          { name: "Ember-roast beetroot", tag: "VG", price: "$19", desc: "Buried in the coals overnight, horseradish, dill oil" },
          { name: "Smoked kingfish", price: "$24", desc: "Cured three hours, green apple, fermented chilli, crème fraîche" },
        ],
      },
      {
        title: "The hearth — mains",
        items: [
          { name: "Whole roasted celeriac", tag: "VG", price: "$32", desc: "Four hours in the ash, black garlic, walnut crumb. On the menu since day one." },
          { name: "Market fish", price: "$42", desc: "Whatever came off the boat this morning — ask us. Charred greens, salsa verde." },
          { name: "Eight-hour lamb shoulder", price: "$46", desc: "Oak smoke, preserved lemon, white bean. Carved at the table." },
          { name: "Dry-aged sirloin, 350g", price: "$54", desc: "Forty days, over coals, bone marrow butter" },
          { name: "Salt-crusted whole fish, for two", price: "$78", desc: "Fennel, burnt lemon. Twenty-five minutes — order when you sit." },
        ],
      },
      {
        title: "Alongside",
        items: [
          { name: "Fire-roast potatoes", tag: "V", price: "$12", desc: "Dripping, rosemary salt" },
          { name: "Bitter leaves", tag: "VG", price: "$11", desc: "Mustard dressing, toasted seed" },
          { name: "Grilled sourdough", tag: "VG", price: "$7", desc: "Olive oil, sea salt" },
        ],
      },
      {
        title: "To finish",
        items: [
          { name: "Burnt basque cheesecake", price: "$16", desc: "Anna's recipe from San Sebastián. Nothing has ever been allowed to replace it." },
          { name: "Fire-roast stone fruit", tag: "VG", price: "$15", desc: "Almond cream, thyme honey" },
          { name: "Smoked chocolate tart", price: "$17", desc: "Salted caramel, crème fraîche" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Weekend lunch",
    courses: [
      {
        title: "Saturday & Sunday, 12 – 3pm",
        items: [
          { name: "Set lunch, two courses", price: "$45", desc: "Choose from the day's board. Three courses $58." },
          { name: "Hearth-baked eggs", tag: "V", price: "$22", desc: "Smoked tomato, chilli oil, grilled sourdough" },
          { name: "Lamb flatbread", price: "$26", desc: "Yesterday's shoulder, pickled onion, yoghurt, mint" },
          { name: "Ember vegetable plate", tag: "VG", price: "$28", desc: "Whatever the fire took that morning, tahini, dukkah" },
          { name: "Sunday roast, for the table", price: "$42pp", desc: "Minimum four people. Sundays only, and it sells out — book ahead." },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    courses: [
      {
        title: "From the bar",
        items: [
          { name: "Smoked old fashioned", price: "$22", desc: "Oak-smoked in the glass at the bar" },
          { name: "Burnt orange negroni", price: "$21", desc: "Charred peel, house vermouth" },
          { name: "Ember spritz", tag: "LOW ABV", price: "$16", desc: "Bitter aperitif, grapefruit, soda" },
          { name: "Seedlip & shrub", tag: "NO ABV", price: "$14", desc: "House fruit shrub, changes weekly" },
        ],
      },
      {
        title: "Wine — by the glass",
        items: [
          { name: "Skin-contact riesling", price: "$16", desc: "Local, unfiltered, faintly wild" },
          { name: "Old-vine grenache", price: "$18", desc: "Serve it slightly chilled — trust us" },
          { name: "Somebody else's choice", price: "$15+", desc: "Tell Tomas what you ate last time you were happy. He'll pour something." },
        ],
      },
      {
        title: "Bottles",
        items: [
          { name: "The full list", price: "70+", desc: "Heavy on small growers and natural wine. Corkage $25 on your own bottle, Tuesdays free." },
        ],
      },
    ],
  },
];

export const MENU_NOTE = {
  legend: "V vegetarian · VG vegan · Tell us about allergies when you book and the kitchen will plan around them.",
  extra: "No surcharge on public holidays.",
};

export const ROOM = {
  headline: "Forty-two seats, *one long bar*, and the fire in the middle of it.",
  lede: "The eight seats facing the hearth are the best in the house and we do not take bookings for them. Turn up, sit down, watch dinner happen.",
};

export const EVENTS = [
  { capacity: "12", title: "The long table", body: "Our communal oak table, sat at one end of the room. Set menu, shared, no minimum spend. Available any service." },
  { capacity: "42", title: "Full restaurant", body: "Exclusive hire, Tuesday to Thursday. Anna builds the menu with you around the fire and the season." },
  { capacity: "6", title: "Chef's counter", body: "Six stools at the pass. Eight courses, cooked and handed to you directly. Fridays and Saturdays only." },
];

export const RESERVATION = {
  times: ["5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm"],
  defaultTime: "7:00 pm",
  guests: ["1", "2", "3", "4", "5", "6", "7 or more — call us"],
  defaultGuests: "2",
  confirmation: "We confirm every booking by text within two hours of service opening.",
};
