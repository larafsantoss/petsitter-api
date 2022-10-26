import { useState , useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

export default function PetSitters() {
    const [data, setData] = useState([]);
    useEffect(() => {
    axios.get("/api/users").then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }, []);
    return (
        <div>
        { data.map((item) => {
            return (
                <Card
                    id={item._id}
                    name={item.name}
                    email={item.email}
                    description={item.description}
                    admin={false}
                    onUpdate ={() => {
                      axios.get("/api/users").then(
                        (response) => {
                          setData(response.data);
                        },
                        (error) => {
                          console.log(error.message);
                        })}
                    }/>
            );
        }) }
        </div>
    )
}