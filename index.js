function vehicle(brand, model, maxSpeed, actualSpeed) {
  this.brand = brand;
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.actualSpeed = actualSpeed;
}
vehicle.prototype.accelerate = function (increase) {
  this.actualSpeed += increase;
  if (this.actualSpeed > this.maxSpeed) {
    this.actualSpeed = this.maxSpeed;
  }
  return `Current speed is ${this.actualSpeed}`;
};

const car1 = new vehicle("BMW", "BMW Serie 2 Gran Coupé", 214, 0);
console.log(car1);

const car2 = new vehicle("Mercedes Benz", "GLE 53", 250, 0);
console.log(car2);

const car3 = new vehicle("Audi", "A5 Sedan", 221, 0);
console.log(car3);
