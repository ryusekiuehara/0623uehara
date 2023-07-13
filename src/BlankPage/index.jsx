import { Link } from "react-router-dom";
import {
 Group4 
} from '../ui-components';
const BlankPage = () => {
  return (
   < div style={{ backgroundColor: "#FFE605" }}>
    <div style={{ color: "red" }}>
        空っぽのページです。
        <Group4 />
      </div>
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
      </div>
   </div>
  );
};
export default BlankPage;
