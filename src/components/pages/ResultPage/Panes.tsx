import React from "react";
import { PanesStyled,Li } from "./styled";

class Panes extends React.PureComponent {
  render() {
    return (
      <PanesStyled>
        <ul>
          <Li active>
              <img src={`/images/Book-type/text/text-icon-${true?'lightblue':'white'}.svg`} alt='טקטס'/>
              <span>טקטס</span>
          </Li>
          <Li>
              <img src={`/images/Book-type/Audio/audio-icon-white.svg`} alt='טקטס'/>
              <span>אודיו</span>
          </Li>
          <Li>
              <img src={`/images/Book-type/video/video-icon-white.svg`} alt='טקטס'/>
              <span>וידאו</span>
          </Li>
        </ul>
      </PanesStyled>
    );
  }
}

export default Panes;
