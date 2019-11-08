const dataset = (element) => {
// TODO: return the element's data attributes in an object
// element =
// `<div class="card" data-id="42" data-price="15" data-category="popular">
//   <div class="card-category">Popular</div>
//   <div class="card-description">
//     <h2>The best burger in town (15€)</h2>
//   </div>
// </div>`


// recuperer la premiere div

// split(' ')
  const div = element;
  const divSplit = div.split(" ");
  // ["data-id='42'","data-price='15'", "data-category='popular'"]
  // forEach() includes("data") ? split("=") --> binome = ["data-price", "15"];
  const divData = divSplit.forEach((param) => {
    if param.includes("data") ? divData += param : divData = divData;
  });

  return divData;

// Object.keys(datas).forEach

// const datas = {};

// return (datas);

};

const div = '<div class="card" data-id="42" data-price="15" data-category="popular">';
console.log(dataset(div));

module.exports = dataset; // Do not remove.
