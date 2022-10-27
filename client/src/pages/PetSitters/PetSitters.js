import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

export default function PetSitters() {
  const [data, setData] = useState([]);
  const getAll = () => {
    axios.get("/api/users").then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  useEffect(() => {
    getAll()
  }, []);
  return (
    <div>
      {data.map((item) => {
        console.log(item)
        return (
          <Card
            key={item._id}
            id={item._id}
            name={item.name}
            email={item.email}
            description={item.description}
            neighbourhood={item.neighborhood}
            price={item.price}
            admin={false}
            onUpdate={getAll}
          />
        );
      })}
    </div>
  )
}