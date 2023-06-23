import { useState } from "react";
import { snacks } from "../../datas/SnackData";
import "../snack/style.css";

export const SnackTable = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchPorduct, setSearchProduct] = useState("");

  const filterData = () => {
    const data = [...snacks];

    if (searchInput) {
      return data.filter(
        (snack) =>
          snack.product_name
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase()) ||
          snack.ingredients.find((elms) =>
            elms.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
          )
      );
    }
  };

  const displayData = filterData() ?? snacks;
  return (
    <div className="snack__table">
      <div className="search__box">
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      </div>
      <table>
        <tr>
          <th onClick={() => setSearchProduct("id")}>ID</th>
          <th onClick={() => setSearchProduct("product_name")}>Product Name</th>
          <th onClick={() => setSearchProduct("product_weight")}>
            Product Weight
          </th>
          <th onClick={() => setSearchProduct("price")}>Price(INR)</th>
          <th onClick={() => setSearchProduct("calories")}>Calories</th>
          <th onClick={() => setSearchProduct("ingredients")}>Ingredients</th>
        </tr>
        {displayData?.map((snack) => {
          const {
            id,
            product_name,
            product_weight,
            price,
            calories,
            ingredients,
          } = snack;
          return (
            <tr>
              <td>{id}</td>
              <td>{product_name}</td>
              <td>{product_weight}</td>
              <td>{price}</td>
              <td>{calories}</td>
              <td>{ingredients}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
