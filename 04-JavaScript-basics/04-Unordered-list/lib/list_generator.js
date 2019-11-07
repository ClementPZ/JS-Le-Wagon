const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`
};

const liste = ['orange', 'baguette', 'cafe'];

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  lis = "";
  const generator = items.forEach((item) => {
    lis += listItem(item);
  });
  return `<ul class="list-group">${lis}</ul>`
};

console.log(unorderedList(liste));

module.exports = { listItem, unorderedList }; // Do not remove.
