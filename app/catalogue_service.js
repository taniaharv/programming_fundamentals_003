// eslint-disable-next-line no-unused-vars

const Book = require("./Book");

// DATA in array
// const catalogue = [
//   "The Catcher in the Rye by J.D. Salinger (10)",
//   "Dracula by Bram Stoker (0)",
//   "Between the Assassinations by Aravind Adiga (9)",
//   "Wolf Hall by Hilary Mantel (33)",
//   "Bring Up The Bodies by Hilary Mantel (31)",
//   "A Place of Greater Safety by Hilary Mantel (11)",
//   "Giving Up the Ghost by Hilary Mantel (8)",
//   "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
//   "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
//   "Conversations With Friends by Sally Rooney (1)",
//   "Normal People by Sally Rooney (2)",
//   "Everything I Never Told You by Celeste Ng (6)",
//   "2666 by Robert Bolaño (17)",
//   "By Night In Chile by Robert Bolaño (8)",
//   "A Tale of Two Cities by Charles Dickens (3)",
//   "Oliver Twist by Charles Dickens (7)",
//   "Great Expectations by Charles Dickens (1)",
//   "The Blind Assassin by Margaret Atwood (8)",
//   "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
//   "The Origin of Species by Charles Darwin (50)"
// ];

// function formatArray(fArray) {
//   if (!fArray) throw new Error("Please provide data to format");

//   let i = 0;
//   let book = fArray[0];
//   let l = false;
//   const books = []
//   while (l === false) {

//   if (i <= fArray.length - 1) {

//       let chunks1 = catalogue[i].split(" by ");
//       let chunkTitle = chunks1[0];
//       let chunks2 = chunks1[1].split(" (")
//       let chunkAuthor = chunks2[0]
//       let chunks3 = chunks2[1].split(")")
//       let chunkQuantity = chunks3[0]
//       const quantityAsNumber = Number(chunkQuantity);

//     const o = {title: chunkTitle, author: chunkAuthor, quantity: quantityAsNumber};
//     // push into array
//   books.push(o)

//     i++

//   }
//    else {
//      l = true;
//       }
//     }
//   };

// DATA as objects 
//  const catalogue = [
//   {
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     quantity: 10
//   },
//   { title: 'Dracula', author: 'Bram Stoker', quantity: 0 },
//   {
//     title: 'Between the Assassinations',
//     author: 'Aravind Adiga',
//     quantity: 9
//   },
//   { title: 'Wolf Hall', author: 'Hilary Mantel', quantity: 33 },
//   {
//     title: 'Bring Up The Bodies',
//     author: 'Hilary Mantel',
//     quantity: 31
//   },
//   {
//     title: 'A Place of Greater Safety',
//     author: 'Hilary Mantel',
//     quantity: 11
//   },
//   {
//     title: 'Giving Up the Ghost',
//     author: 'Hilary Mantel',
//     quantity: 8
//   },
//   {
//     title: 'The Assassination of Margaret Thatcher',
//     author: 'Hilary Mantel',
//     quantity: 43
//   },
//   {
//     title: 'The Yellow Wallpaper',
//     author: 'Charlotte Perkins Gilman',
//     quantity: 12
//   },
//   {
//     title: 'Conversations With Friends',
//     author: 'Sally Rooney',
//     quantity: 1
//   },
//   { title: 'Normal People', author: 'Sally Rooney', quantity: 2 },
//   {
//     title: 'Everything I Never Told You',
//     author: 'Celeste Ng',
//     quantity: 6
//   },
//   { title: '2666', author: 'Robert Bolaño', quantity: 17 },
//   {
//     title: 'By Night In Chile',
//     author: 'Robert Bolaño',
//     quantity: 8
//   },
//   {
//     title: 'A Tale of Two Cities',
//     author: 'Charles Dickens',
//     quantity: 3
//   },
//   { title: 'Oliver Twist', author: 'Charles Dickens', quantity: 7 },
//   {
//     title: 'Great Expectations',
//     author: 'Charles Dickens',
//     quantity: 1
//   },
//   {
//     title: 'The Blind Assassin',
//     author: 'Margaret Atwood',
//     quantity: 8
//   },
//   {
//     title: 'Why Be Happy When You Could Be Normal?',
//     author: 'Jeanette Winterson',
//     quantity: 19
//   },
//   {
//     title: 'The Origin of Species',
//     author: 'Charles Darwin',
//     quantity: 50
//   }
// ];

// Using the Book class to create the book objectys populating the catalogue array
const catalogue = [
  new Book("The Catcher in the Rye", "J.D. Salinger", 10),
  new Book("Dracula", "Bram Stoker", 0),
  new Book("Between the Assassinations", "Aravind Adiga", 9),
  new Book("Wolf Hall", "Hilary Mantel'", 33),
  new Book("Bring Up The Bodies", "Hilary Mantel", 31),
  new Book("A Place of Greater Safety", "Hilary Mantel", 11),
  new Book("Giving Up the Ghost", "Hilary Mantel", 8),
  new Book("The Assassination of Margaret Thatcher", "Hilary Mantel", 43),
  new Book("The Yellow Wallpaper", "Charlotte Perkins Gilman", 12),
  new Book("Conversations With Friends", "Sally Rooney", 1),
  new Book("Normal People", "Sally Rooney", 2),
  new Book("Everything I Never Told You", "Celeste Ng", 6),
  new Book("2666", "Robert Bolaño", 17),
  new Book("By Night In Chile", "Robert Bolaño", 8),
  new Book("A Tale of Two Cities", "Charles Dickens", 3),
  new Book("Oliver Twist", "Charles Dickens", 7),
  new Book("Great Expectations", "Charles Dickens", 1),
  new Book("The Blind Assassin", "Margaret Atwood", 8),
  new Book("Why Be Happy When You Could Be Normal?", "Jeanette Winterson", 19),
  new Book("The Origin of Species", "Charles Darwin", 50),
];

function checkBook(title) {
  if (!title) throw new Error("Please provide a title");

  for (let i = 0; i < catalogue.length; i = i + 1) {
    const book = catalogue[i];
    let bookTitle = book.title;
    if (bookTitle.toLowerCase().includes(title.toLowerCase())) {
      return true;
    }
  }
  return false;
}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  let count = 0;
  for (let i = 0; i < catalogue.length; i = i + 1) {
    const book = catalogue[i];
    let bookTitle = book.title;
    if (bookTitle.toLowerCase().includes(keyword.toLowerCase())) {
      count = count + 1;
    }
  }
  return count;
}

function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let i = 0;
  let searchResults = []
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookTitle = book.title;
    let bookAuthor = book.author;

    if (bookAuthor.toLowerCase().includes(author.toLowerCase())) {
      searchResults.push(bookTitle);
    }
    i++;
  } if (typeof searchResults[0] === "undefined") return "Author not Found";
  return searchResults
}

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  let i = 0;
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookTitle = book.title;

    if (bookTitle.toLowerCase().includes(title.toLowerCase())) {
      return Number(book.quantity);
    }
    i++;
  } return "Not in our catalogue";
}
function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  let i = 0;
  let searchResults = []
  let qty
  while (i < catalogue.length) {
    const book = catalogue[i];
    let bookTitle = book.title;

    if (bookTitle.toLowerCase().includes(title.toLowerCase())) {
      qty = book.quantity;
    }
    i++;
  } if (typeof qty === "undefined") return "Not in our catalogue";
  switch (qty) {
    case 0:
      return "Not in Stock";
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Low Stock";
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return "Medium Stock";
      break;
    default:
      return "High Stock";
      break;
  }
}


module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
