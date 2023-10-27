class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();
    this.run();
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    document.getElementById("filter").style.width = "0";
    const passenger = document.getElementById("inputPenumpang");
    const date = document.getElementById("inputTanggal");
    const time = document.getElementById("inputWaktu");
    const passengerSet = passenger.value;
    const dateSet = date.value;
    const timeSet = time.value;

    let inputDateTime = dateSet + "T" + timeSet + "Z";
    if(timeSet=="" || dateSet==""){
      alert("Please fill out the form");
    }

    let filterCars = cars.filter((car) =>{
      if (passengerSet === ""){
        return(
          car.available === true &&
          Date.parse(car.availableAt) > Date.parse(inputDateTime)
        );
      }else {
        return(
          car.available === true &&
          Date.parse(car.availableAt) > DataTransfer.parse(inputDateTime) &&
          car.capacity >= passengerSet
        );
      }
    });
    
    Car.init(filterCars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
