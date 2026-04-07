// =============================================
// LUMIZA CAFE — EDITABLE CONTENT
// Update menu items, prices, hours, and contact
// info here. No need to touch any other files!
// =============================================

export const cafeInfo = {
  name: "Lumiza Cafe",
  tagline: "Your hidden gem in Bondi Junction",
  address: "5/28 Spring St, Bondi Junction",
  addressNote: "Under the Holiday Inn",
  phone: "(02) 8937 0767",
  email: "hello@lumiza.cafe",
  googleMapsUrl: "https://share.google/AEQ2r54rQRDk2zIQj",
  socialMedia: {
    instagram: "https://www.instagram.com/lumiza.cafe/",
  },
};

export const openingHours = [
  { days: "Monday – Friday", hours: "5:30 AM – 3:00 PM" },
  { days: "Saturday", hours: "5:30 AM – 12:00 PM" },
  { days: "Sunday", hours: "Closed" },
  { days: "Public holidays", hours: "Closed" },
];

/** Short line for the hero — full hours live in Contact */
export const openingHoursHeroSummary =
  "Mon–Fri 5:30am–3pm · Sat 5:30am–12pm · Closed Sun & public holidays";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: "popular" | "veggie" | "new";
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

export const menuCategories: MenuCategory[] = [
  // ── BREAKFAST MENU ──
  {
    title: "Breakfast",
    items: [
      { name: "Toast w/ Preserves", description: "Choice of jam, butter, peanut butter, nutella or vegemite", price: "$5.00" },
      { name: "Raisin Toast", description: "Served w/ butter", price: "$5.00" },
      { name: "Toastie or Croissant", description: "Choice of cheese & tomato or ham & cheese", price: "$7.50" },
      { name: "Bacon & Egg Roll", description: "Choice of sauce — tomato, BBQ or chilli", price: "$9.50", tag: "popular" },
      { name: "BLT Roll", description: "Bacon, lettuce, tomato", price: "$10.50" },
      { name: "BLAT Roll", description: "Bacon, lettuce, avocado, tomato", price: "$12.50", tag: "popular" },
      { name: "Seasonal Fruit Salad", description: "Served w/ yoghurt", price: "$10.00", tag: "veggie" },
      { name: "Homemade Granola", description: "Served w/ yoghurt", price: "$9.90", tag: "veggie" },
      { name: "Eggs Benedict", description: "Two poached eggs, ham w/ homemade hollandaise sauce on artisan sourdough", price: "$17.90" },
      { name: "Eggs Salmon Benedict", description: "Two poached eggs w/ smoked salmon & hollandaise on artisan sourdough", price: "$20.90" },
      { name: "Avo Smash", description: "Smashed avo w/ tomato and feta on sourdough", price: "$11.90", tag: "popular" },
      { name: "Eggs Your Way", description: "Poached, scrambled or fried eggs w/ toast", price: "$10.50" },
      { name: "Vego Brekkie", description: "Artisan sourdough, grilled halloumi, baby spinach, grilled tomato & mushrooms. Option w/ avo +$3", price: "$18.90", tag: "veggie" },
      { name: "Big Lumiza", description: "Artisan sourdough, two eggs your way, bacon, sausage, mushrooms, grilled tomato & baby spinach", price: "$21.90" },
      { name: "Ham Omelette w/ Toast", description: "Ham, tomato, onions & cheese", price: "$16.90" },
      { name: "Chicken Omelette w/ Toast", description: "Chicken, cheese, onions & mushrooms", price: "$16.90" },
      { name: "Vegie Omelette w/ Toast", description: "Tomato, mushrooms, spinach & cheese", price: "$16.90", tag: "veggie" },
      { name: "Chorizo Omelette w/ Toast", description: "Chorizo, cheese, capsicum & olives", price: "$18.90" },
    ],
  },
  {
    title: "Breakfast Extras",
    items: [
      { name: "Spinach / Avo / Baked Beans / Tomato", description: "Add to any breakfast", price: "$3.00" },
      { name: "Bacon / Halloumi / Sausages", description: "Add to any breakfast", price: "$5.00" },
      { name: "Smoked Salmon", description: "Add to any breakfast", price: "$6.00" },
      { name: "Crispy Bacon", description: "Add to any breakfast", price: "$6.00" },
    ],
  },
  // ── LUNCH MENU ──
  {
    title: "Burgers",
    items: [
      { name: "Classic Beef Burger", description: "Homemade beef patty, mixed leaves, tomato & cheese", price: "$12.00" },
      { name: "Lumiza Burger", description: "Homemade beef patty, mixed leaves, cheese, bacon, egg with tomato relish", price: "$14.00", tag: "popular" },
      { name: "Satay Chicken Burger", description: "Grilled chicken breast, mixed leaves, tomato, cheese with satay sauce", price: "$12.00" },
      { name: "Classic Chicken Burger", description: "Grilled chicken breast, mixed leaves, cheese and mayo", price: "$12.00", tag: "popular" },
    ],
  },
  {
    title: "Mexican Style",
    items: [
      { name: "Chicken Burrito", description: "Melted cheese, chicken, tomato salsa, sour cream", price: "$15.90" },
      { name: "Beef Burrito", description: "Melted cheese, beef, tomato salsa, sour cream", price: "$15.90" },
      { name: "Seafood Burrito", description: "Melted cheese, prawns, tomato salsa, sour cream", price: "$19.90" },
      { name: "Beef Nachos", description: "Chilli ground beef & beans, melted cheese, served w/ sour cream & guacamole", price: "$15.90" },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Garden Salad", description: "Fresh mixed garden salad", price: "$11.90", tag: "veggie" },
      { name: "Greek Salad", description: "Traditional Greek salad", price: "$15.90", tag: "veggie" },
      { name: "Caesar Salad", description: "Classic Caesar salad", price: "$15.90" },
      { name: "Chicken Caesar Salad", description: "Caesar salad topped with grilled chicken", price: "$19.90", tag: "popular" },
      { name: "Chicken Avocado Salad", description: "Grilled chicken with fresh avocado salad", price: "$18.90", tag: "popular" },
    ],
  },
  {
    title: "Pastas",
    items: [
      { name: "Beef Bolognaise", description: "Choose spaghetti, fettuccini or penne", price: "$15.90", tag: "popular" },
      { name: "Boscaiola", description: "Choose spaghetti, fettuccini or penne", price: "$15.90", tag: "popular" },
      { name: "Chilli Chicken", description: "Choose spaghetti, fettuccini or penne", price: "$15.90" },
      { name: "Amatriciana", description: "Choose spaghetti, fettuccini or penne", price: "$15.90", tag: "popular" },
      { name: "Mushroom Sauce", description: "Choose spaghetti, fettuccini or penne", price: "$15.90", tag: "veggie" },
      { name: "Vegetarian Sauce", description: "Choose spaghetti, fettuccini or penne", price: "$15.90", tag: "veggie" },
      { name: "Napolitana", description: "Choose spaghetti, fettuccini or penne", price: "$13.90", tag: "veggie" },
      { name: "Alfredo", description: "Choose spaghetti, fettuccini or penne", price: "$13.90" },
      { name: "Garlic Prawns", description: "Choose spaghetti, fettuccini or penne", price: "$19.90" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Hot Chips", description: "Crispy hot chips", price: "$5.00 / $7.50" },
      { name: "Wedges", description: "Served w/ sour cream & sweet chilli", price: "$10.90" },
      { name: "Spring Rolls (4pcs)", description: "Crispy spring rolls", price: "$7.90" },
      { name: "Chicken Wings (4pcs)", description: "Golden fried chicken wings", price: "$8.90" },
      { name: "Calamari & Chips", description: "Fried calamari served with chips", price: "$12.00" },
    ],
  },
  // ── DRINKS MENU ──
  {
    title: "Hot Drinks",
    items: [
      { name: "Espresso", description: "Rich, bold shot", price: "$3.50" },
      { name: "Ristretto", description: "Short, concentrated espresso", price: "$3.50" },
      { name: "Piccolo", description: "Espresso with a dash of steamed milk", price: "$4.00" },
      { name: "Macchiato", description: "Espresso marked with foam", price: "$4.00" },
      { name: "Cappuccino", description: "Classic cap with silky microfoam", price: "$4.50 / $5.00" },
      { name: "Latte", description: "Smooth espresso with steamed milk", price: "$4.50 / $5.00" },
      { name: "Flat White", description: "Our signature smooth & velvety flat white", price: "$4.50 / $5.00" },
      { name: "Long Black", description: "Double shot over hot water", price: "$4.50 / $5.00" },
      { name: "Mocha", description: "Espresso, chocolate & steamed milk", price: "$4.50 / $5.00" },
      { name: "Hot Chocolate", description: "Rich & creamy hot chocolate", price: "$4.50 / $5.00" },
      { name: "Chai Latte", description: "Spiced chai with steamed milk", price: "$4.50 / $5.00" },
      { name: "Green Tea Latte", description: "Green tea with steamed milk", price: "$5.00 / $5.50" },
    ],
    note: "Extra charges apply for alternative milk.",
  },
  {
    title: "Tea",
    items: [
      { name: "English Breakfast", description: "Classic black tea", price: "$4.50" },
      { name: "Earl Grey", description: "Bergamot-infused black tea", price: "$4.50" },
      { name: "Camomile", description: "Calming herbal tea", price: "$4.50" },
      { name: "Peppermint", description: "Refreshing mint tea", price: "$4.50" },
      { name: "Green Tea", description: "Light & antioxidant-rich", price: "$4.50" },
      { name: "Lemon & Ginger", description: "Zesty & warming herbal tea", price: "$4.50" },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Freshly Squeezed Juice", description: "Freshly squeezed to order", price: "$7.50" },
      { name: "Iced Coffee", description: "Espresso over ice with milk", price: "$7.50", tag: "popular" },
      { name: "Iced Mocha", description: "Chocolate espresso over ice", price: "$7.50" },
      { name: "Iced Chocolate", description: "Rich chocolate over ice", price: "$7.50" },
      { name: "Iced Chai", description: "Spiced chai over ice", price: "$7.50" },
      { name: "Milkshake", description: "Choose: chocolate, strawberry, caramel or vanilla", price: "$7.50" },
      { name: "Smoothie", description: "Choose: mango, banana or mixed berries", price: "$8.50" },
      { name: "Ice Matcha", description: "Chilled matcha over ice with milk", price: "$8.50", tag: "new" },
    ],
  },
];
