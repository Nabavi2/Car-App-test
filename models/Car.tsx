class Car {
  id: number;
  car: string;
  car_model: string;
  car_color: any;
  car_model_year: number;
  car_vin: any;
  price: string;
  availability: boolean;
  image: string;

  constructor(
    id: number,
    car: string,
    car_model: any,
    car_color: any,
    car_model_year: any,
    car_vin: any,
    price: any,
    availability: boolean,
    image: string
  ) {
    this.id = id;
    this.car = car;
    this.car_model = car_model;
    this.car_color = car_color;
    this.car_model_year = car_model_year;
    this.car_vin = car_vin;
    this.price = price;
    this.availability = availability;
    this.image = image;
  }
}
export default Car;
