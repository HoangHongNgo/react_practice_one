import React, { MouseEventHandler, useState, useEffect } from "react";
import { S } from "./styled";
import SidebarOption from "../../components/SidebarOption";
import { getCategory } from "../../services/service";
import { CategoryResponse } from "../../types/category";
import ProductList from "../../components/ProductList";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<CategoryResponse[]>();
  const [cateSelected, setCateSelected] = useState<number>(1);

  useEffect(() => {
    getCategory() // Assuming getCategory returns a promise
      .then((cateList) => {
        setCategories(cateList);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

  const handleOptionClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const clickedOptionId = parseInt(e.currentTarget.value);
    setCateSelected(clickedOptionId);
  };

  return (
    <S.HomeContainer>
      <S.Sidebar>
        {categories?.map((item) => (
          <SidebarOption
            id={item.id.toString()}
            name={item.name}
            image={item.image}
            selected={item.id === cateSelected ? true : false}
            onClick={handleOptionClick}
          />
        ))}
      </S.Sidebar>
      <ProductList cateId={cateSelected.toString()} />
    </S.HomeContainer>
  );
};

export default Home;
