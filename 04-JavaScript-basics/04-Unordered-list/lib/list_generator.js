const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `  <li class="list-group-item">${content}</li>`
};

// OUT: ONE STRING
const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  lis = "";
  const generator = items.forEach((item) => {
    lis += listItem(item);
  });
  return `<ul class="list-group">${lis}</ul>`
};


// CORRECT LIST WITH INDENTATION
const unorderedList2 = (items) => {
  console.log('<ul class="list-group">');
  items.map((item) => {
    item = `  ${listItem(item)}`;
    console.log(item);
  });
  console.log(`</ul>`)
};

const liste = ['orange', 'baguette', 'cafe'];
console.log(unorderedList2(liste));


// WITH MAP
const unorderedListMap = array => array.map(el => listItem(el));
const listGenerator = (array) => {
  console.log('<ul class="list-group">');
  console.log(unorderedListMap(array));
  console.log('</ul>');
};

console.log(unorderedListMap(liste));



module.exports = { listItem, unorderedList }; // Do not remove.
