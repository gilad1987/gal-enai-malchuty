import React from "react";
import { CategoriesSectionStyled, CategoriesWrapper } from "./styled";
import { H2 } from "../shared/styled";
import CategoryMenuItem from "./CategoryMenuItem/CategoryMenuItem";
import uuidv1 from "uuid/v1";


class CategoriesSection extends React.PureComponent {
  categoryItems = [
    {
      background:
        "linear-gradient(to bottom, rgba(210, 97, 97, 0), #d26161),url(/images/categories/bg-books/pexels-photo-1148399.jpg)",
      iconPath: "/images/categories/books-white.svg",
      label: "ספרים",
      counter: 20,
      key: uuidv1(),
      apiPath:'http://videos.jewishnature.co.il/API/Json/SubjectsTreeStructure/1480662372',
      treeId:'1480662372',
    },
    {
      background:
        "linear-gradient(to bottom, rgba(154, 146, 172, 0), #9a92ac),url(/images/categories/bg-subjects/notebook-empty-design-paper-419635.jpg)",
      iconPath: "/images/categories/subjects-white.svg",
      label: "נושאים",
      counter: 40,
      key: uuidv1()
    },
    {
      background:
        "linear-gradient(to bottom, rgba(124, 180, 212, 0), #7cb4d4),url(/images/categories/bglessons/auditorium-benches-chairs-class-207691.jpg)",
      iconPath: "/images/categories/classes-icon-white.svg",
      label: "שיעורים",
      counter: 200,
      key: uuidv1()
    },
    {
      background: "linear-gradient(to bottom, rgba(57, 122, 170, 0), #397aaa),url(/images/categories/bg-audio/pexels-photo-1493004.jpg)",
      iconPath: "/images/categories/audio-white.svg",
      label: "אודיו",
      counter: 56,
      key: uuidv1()
    }
  ];
  render() {
    return (
      <CategoriesSectionStyled>
        <H2>עיון</H2>
        <CategoriesWrapper>
          {this.categoryItems.map((categoryItem: any) => (
            <CategoryMenuItem key={categoryItem.key} {...categoryItem} />
          ))}
        </CategoriesWrapper>
      </CategoriesSectionStyled>
    );
  }
}

export default CategoriesSection;
