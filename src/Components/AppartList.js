import "../Styles/Card.css";
import { list } from "../Datas/List";
import Card from "./Card";

function AppartList() {
  return (
    <main className="content-cards">
      {list.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
}

export default AppartList;
