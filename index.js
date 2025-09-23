function vehicle(brand, model, maxSpeed) {
  this.brand = brand;
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.actualSpeed = actualSpeed;
}
vehicle.prototype.accelerate = function (increase) {};

const car1 = new vehicle("BMW", "BMW Serie 2 Gran Coupé", 214);
console.log(car1);

const car2 = new vehicle("Mercedes Benz", "GLE 53", 250);
console.log(car2);

const car3 = new vehicle("Audi", "A5 Sedan", 221);
console.log(car3);
