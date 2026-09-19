const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
console.log(recipe2TotalIngredients);

const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe3TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
console.log(recipe2DifficultyLevel);

const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe3DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);


//DEVICE LOAN LEDGER
const equipmentLedger = {
  "1": { 
    type: "PC", 
    status: "CheckedOut", 
    borrower: { 
      name: "John Smith", 
      email: "john@acme.org" 
    }, 
    dueDate: "11/30/2025" 
  },
  "2": { 
    type: "Laptop", 
    status: "CheckedIn", 
    borrower: { 
      name: "", 
      email: "" 
    }, 
    dueDate: "" 
  },
  "3": { 
    type: "Laptop", 
    status: "CheckedOut", 
    borrower: { 
      name: "Jane Doe", 
      email: "jane@acme.org" 
    }, 
    dueDate: "10/31/2025" 
  },
  "4": { 
    type: "iPad", 
    status: "CheckedIn", 
    borrower: { 
      name: "", 
      email: "" 
    }, 
    dueDate: "" 
  }
};

function checkoutDevice(ledger, assetTag, borrower) {
  const clonedLedger = structuredClone(ledger);

  if (!clonedLedger[assetTag]) {
    return { ledger: ledger, message: `${assetTag} not found` };
  } 
  
  else if (clonedLedger[assetTag]["status"] === "CheckedOut") {
    return { ledger: ledger, message: `${assetTag} is already checked out` };
  }

  else {
    clonedLedger[assetTag]["borrower"]["name"] = borrower.name;
    clonedLedger[assetTag]["borrower"]["email"] = borrower.email;
    clonedLedger[assetTag]["status"] = "CheckedOut";

    return { 
      ledger: clonedLedger, 
      message: `${assetTag} checked out to ${borrower.name}` 
    };
  }
}

function checkinDevice(ledger, assetTag){
  const clonedLedger = structuredClone(ledger);

  if(!clonedLedger[assetTag]){
    return {ledger: ledger, message: `${assetTag} not found`};
  }

  else if(clonedLedger[assetTag]["status"] === "CheckedIn"){
    return {ledger: ledger, message: `${assetTag} is already checked in`};
  }

  else{
    clonedLedger[assetTag]["borrower"]["name"] = "";
    clonedLedger[assetTag]["borrower"]["email"] = "";
    clonedLedger[assetTag]["dueDate"] = "";
    clonedLedger[assetTag]["status"] = "CheckedIn";
  }

  return {
    ledger: clonedLedger,
    message: `${assetTag} is checked in`
  };
}

function listOverdueDevices(ledger, today) {
  // turn "9/5/2025" or "09/05/2025" into [2025, 9, 5] — year, month, day as numbers
  function parseDateParts(dateStr) {
    const [month, day, year] = dateStr.split("/").map(Number);
    return [year, month, day];
  }

  // returns true if dateA is strictly before dateB
  function isBefore(dateA, dateB) {
    const [yearA, monthA, dayA] = parseDateParts(dateA);
    const [yearB, monthB, dayB] = parseDateParts(dateB);

    if (yearA !== yearB) return yearA < yearB;
    if (monthA !== monthB) return monthA < monthB;
    return dayA < dayB;
  }

  const overdueDevices = Object.values(ledger).filter((device) => {
    if (device.status !== "CheckedOut") return false;
    if (device.dueDate === "") return false;
    return isBefore(device.dueDate, today);
  });

  overdueDevices.sort((a, b) => {
    if (isBefore(a.dueDate, b.dueDate)) return -1;
    if (isBefore(b.dueDate, a.dueDate)) return 1;
    return 0;
  });

  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}