const csv = require('csv-parser');
const fs = require('fs');

//read from csv file
let data = [];
fs.createReadStream('sample.csv')
  .pipe(csv())
  .on('sample', (row) => {
    row.add(row);
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  //seperate enrollees from insurance company
  Set insuComp = [];
  data.map(i=> insuComp.add(i.insurenCompany));
   let finalObj = [];
  insuComp.map(i=>{
    let x = {[i]: ''};
    finalObj.add(x);
  })

  finalObj.map(i=>{
    data.map(j=>{
      if(i.key == j.insurenCompany){
        i.add(j);
      }
    })
  })


//sort by name
  finalObj.map(item=>{
    items.sort(function(a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
         if (nameA < nameB) {
             return -1;
             }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
    });
  })
