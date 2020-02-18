import axios from "axios";
//import { toJS } from "mobx";
// import Qs from 'qs';

class Api {
  getBooks = async () => {
    try {
      const response = await axios.get(
        `http://videos.jewishnature.co.il/API/Json/SubjectsTreeStructure/1480662372`
      );
      return response;
    } catch (err) {
      return err;
    }
  };

  getBookHtml = async (id: number) => {
    try {
      const response = await axios.get(
        `http://videos.jewishnature.co.il/API/Json/GetHtmlContent/${id}`
      );
      return response;
    } catch (err) {
      return err;
    }
  };
}

export default Api;
