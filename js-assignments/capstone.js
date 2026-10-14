// Capstone: Interactive Product Inventory & Analytics Dashboard
console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// ---------- Functions ----------

// Checks for duplicates using a loop with continue / break
function productExists(name) {
  let found = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() !== name.toLowerCase()) continue;
    found = true;
    break;
  }
  return found;
}

// Reads and validates input; retries on bad input, breaks on cancel
function readProduct() {
  const MAX_ATTEMPTS = 3;
  let attempts = 0;
  while (attempts < MAX_ATTEMPTS) {
    attempts++;
    const rawName = prompt("Enter product name:", "Monitor");
    const rawPrice = prompt("Enter product price:", "150");
    if (rawName === null || rawPrice === null) break;

    const name = rawName.trim();
    const cleanPrice = rawPrice.replace("$", "").trim();
    const price = Number(cleanPrice);

    if (name === "" || cleanPrice === "" || Number.isNaN(price) || price <= 0) {
      console.log(`Invalid input (attempt ${attempts}/${MAX_ATTEMPTS}). Please try again.`);
      continue;
    }
    if (productExists(name)) {
      console.log(`"${name}" already exists in the inventory. Please try again.`);
      continue;
    }
    return { name, price };
  }
  return null;
}

// Assigns a category using switch(true) with dynamic thresholds
function getCategory(price) {
  switch (true) {
    case price < 50:
      return "Budget";
    case price < 500:
      return "Standard";
    default:
      return "Premium";
  }
}

// Regular function: total inventory value
function calculateTotalValue(items) {
  let total = 0;
  for (const item of items) total += item.price;
  return total;
}

// Arrow functions: tax and discount with defaults
const applyTax = (amount, taxRate = 0) => amount + (amount * taxRate) / 100;
const applyDiscount = (amount, discountRate = 0) => amount - (amount * discountRate) / 100;

// ---------- 1. Data & Input ----------
const newProduct = readProduct();

if (newProduct === null) {
  console.log("No valid product was added. Continuing with existing inventory.");
} else {
  inventory.push(newProduct);
  console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
}

// ---------- 2 & 5. Conditionals + forEach ----------
console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

// ---------- 4 & 5. Analytics ----------
console.log("");
console.log("--- Financial Analytics ---");
const totalValue = calculateTotalValue(inventory);
const affordable = inventory.filter((item) => item.price < 200).map((item) => item.name);
const report = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);

console.log(`Total Inventory Value: $${totalValue}`);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordable).replace(/,/g, ", ")}`);
console.log(`Formatted Report List: ${JSON.stringify(report).replace(/","/g, '", "')}`);

// ---------- Tax & Discount demo ----------
console.log("");
console.log("--- Tax & Discount Demo ---");
console.log(`Total with 18% tax: $${applyTax(totalValue, 18).toFixed(2)}`);
console.log(`Total with 10% discount: $${applyDiscount(totalValue, 10).toFixed(2)}`);
console.log(`Total after 10% discount + 18% tax: $${applyTax(applyDiscount(totalValue, 10), 18).toFixed(2)}`);
