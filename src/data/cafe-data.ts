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
  email: "hello@lumizacafe.com.au",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=5%2F28+Spring+St+Bondi+Junction+NSW",
  socialMedia: {
    instagram: "https://instagram.com/lumizacafe",
    facebook: "https://facebook.com/lumizacafe",
  },
};

export const openingHours = [
  { days: "Monday – Friday", hours: "5:30 AM – 3:00 PM" },
  { days: "Saturday", hours: "5:30 AM – 12:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: "popular" | "veggie" | "new";
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", description: "Rich, bold single shot", price: "$4.00" },
      { name: "Flat White", description: "Our signature smooth & velvety flat white", price: "$5.00", tag: "popular" },
      { name: "Cappuccino", description: "Classic cap with silky microfoam", price: "$5.00" },
      { name: "Latte", description: "Smooth espresso with steamed milk", price: "$5.00" },
      { name: "Long Black", description: "Double shot over hot water", price: "$4.50" },
      { name: "Mocha", description: "Espresso, chocolate & steamed milk", price: "$5.50" },
      { name: "Chai Latte", description: "Spiced chai with your choice of milk", price: "$5.50" },
      { name: "Matcha Latte", description: "Premium Japanese matcha", price: "$6.00" },
    ],
  },
  {
    title: "Breakfast Classics",
    items: [
      {
        name: "The Big Breakfast",
        description: "Two eggs, bacon, sausage, grilled tomato, mushrooms, hash brown & sourdough toast",
        price: "$22.00",
        tag: "popular",
      },
      {
        name: "Eggs Benedict",
        description: "Poached eggs on sourdough with hollandaise, your choice of ham or smoked salmon",
        price: "$19.00",
      },
      {
        name: "Smashed Avo",
        description: "Avocado on sourdough with feta, cherry tomatoes, lemon & chilli flakes",
        price: "$18.00",
        tag: "veggie",
      },
      {
        name: "Bacon & Egg Roll",
        description: "Crispy bacon, fried egg, BBQ sauce on a toasted milk bun",
        price: "$12.00",
      },
      {
        name: "French Toast",
        description: "Brioche french toast with maple syrup, berries & vanilla cream",
        price: "$18.00",
      },
    ],
  },
  {
    title: "Veggie & Healthy",
    items: [
      {
        name: "Veggie Big Breakfast",
        description: "Two eggs, haloumi, grilled tomato, mushrooms, avocado, spinach & sourdough",
        price: "$21.00",
        tag: "veggie",
      },
      {
        name: "Açaí Bowl",
        description: "Blended açaí with banana, granola, coconut & fresh berries",
        price: "$16.00",
        tag: "veggie",
      },
      {
        name: "Green Omelette",
        description: "Three-egg omelette with spinach, feta, avocado & herbs",
        price: "$17.00",
        tag: "veggie",
      },
    ],
  },
  {
    title: "Lunch",
    items: [
      {
        name: "Chicken Club Sandwich",
        description: "Grilled chicken, bacon, lettuce, tomato, avocado & aioli on Turkish bread",
        price: "$18.00",
      },
      {
        name: "Fish & Chips",
        description: "Beer-battered barramundi with chips, salad & tartare sauce",
        price: "$19.00",
      },
      {
        name: "Haloumi Burger",
        description: "Grilled haloumi, roasted capsicum, rocket & sweet chilli on a brioche bun",
        price: "$17.00",
        tag: "veggie",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Fresh Orange Juice", description: "Freshly squeezed to order", price: "$7.00" },
      { name: "Smoothie", description: "Banana, berries, yoghurt & honey", price: "$9.00" },
      { name: "Iced Coffee", description: "Espresso, milk, ice cream & cream", price: "$7.00" },
      { name: "Iced Chocolate", description: "Rich chocolate, milk, ice cream & cream", price: "$7.00" },
    ],
  },
];
