function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  var count = 0 //index untuk result[]

  // Tulis code-mu disini
  for(var i=0;i<cars.length;i++){
    if(cars[i].available === true){
      result[count]=cars[i];
      count++;
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.log(result)
  return result
}