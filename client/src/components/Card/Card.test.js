import { render, screen } from "@testing-library/react";
import Card from './Card';

test("shows title-name when renders Card", () => {
  const item = {
    _id: "123",
    name: "test name",
    email: "test email",
    description: "test description",
    neighbourhood: "test neighbourhood",
    price: "test price",

  }
  render(<Card
    id={item._id}
    name={item.name}
    email={item.email}
    description={item.description}
    neighbourhood={item.neighbourhood}
    price={item.price}
  />);
  
  const titleElement = screen.getByTestId("title-name");
  expect(titleElement.innerHTML).toBe(item.name);


});
