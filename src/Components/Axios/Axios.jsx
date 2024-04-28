import React from "react";
import axios from "axios";
import { Wrapper } from "../../app.style";

function AxiosApi() {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const fetdata = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );

        setData(res?.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetdata();
  }, []);

  return (
    <>
      <h1>API axios</h1>

      <input
        type="search"
        name="search"
        placeholder="search"
        onChange={(evt) => setSearch(evt.target.value)}
        autoComplete="off"
      />

      <div>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt=""  width={250} height={450}/>
          </li>
        ))}
      </div>

      <Wrapper>Button</Wrapper>
    </>
  );
}

export default AxiosApi;
