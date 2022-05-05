class Car {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: string;
  car_vin: string;
  price: string;
  availability: string;

  constructor(
    id: number,
    car: string,
    carModel: string,
    carColor: string,
    carModelYear: string,
    carVin: string,
    price: string,
    availability: string
  ) {
    this.id = id;
    this.car = car;
    this.car_model = carModel;
    this.car_color = carColor;
    this.car_model_year = carModelYear;
    this.car_vin = carVin;
    this.price = price;
    this.availability = availability;
  }
}
export default Car;
