import React from "react";
import { MalchutySearchStyled, DisplayAdvancedSearchButtonStyled } from "./styled";
import { Input } from "antd";
import { Radio } from "antd";

const { Search } = Input;

class MalchutySearch extends React.PureComponent {

  render() {
    console.log(this.props);
    return (
      <MalchutySearchStyled>
        <Search
          size="large"
          placeholder="הקלד ביטוי, מילה או משפט לחיפוש במאגר"
          onSearch={value => console.log(value)}
          enterButton
        />
        <div>
          <Radio.Group
            options={[
              { label: "הביטוי המדויק", value: "Apple1" },
              { label: "מכיל את המילים או ביטוי דומה", value: "Apple" }
            ]}
            onChange={() => {}}
          />
        </div>

        <DisplayAdvancedSearchButtonStyled href="#asd" >
          חיפוש מתקדם
        </DisplayAdvancedSearchButtonStyled>
      </MalchutySearchStyled>
    );
  }
}

export default MalchutySearch;
