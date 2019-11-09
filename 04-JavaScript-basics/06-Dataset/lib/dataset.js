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

  return "hello";
};




const div = '<div class="card" data-id="42" data-price="15" data-category="popular">';
console.log(dataset(div));

module.exports = dataset; // Do not remove.








//  let datas = new Object();
//   let divData = [];
//   Object.keys(datas).forEach((key) => {

// Input : const object = { 70: 'x', 21: 'y', 35: 'z' };
//         console.log(Object.keys(object));
// Output : ['21', '35', '70']


//     divData = divSplit.forEach((parametre) => {
//       if (parametre.includes("data")) {
//         parametre = parametre.replace('data-','');
//         divData.push(parametre.split("="));
//         console.log(divData);
//       }
//     });
//   });
