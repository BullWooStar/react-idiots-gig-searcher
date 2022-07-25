import { useState } from "react";
import Input from "./components/Input";
import GigList from "./components/GigList";

function App() {
  const [gigInfo, setGigInfo] = useState([]); // []말고 null
  const [onLoading, setOnLoading] = useState(false);

  const searchGig = async (props) => {
    setOnLoading(true);
    const response = await fetch(
      //try catch
      `https://api.idiots.band/api/search?keyword=${props}` // fetch 쓸때는 response.ok
    );
    const result = await response.json();
    setGigInfo(result);
    setOnLoading(false);
  };

  let content = (
    <p style={{ textAlign: "center" }}>
      이디어츠는 누구와 같이 어떠한 공연을 했을까요?
      <br />
      밴드 이름을 검색해주세요~
    </p>
  );

  if (gigInfo.length > 0) {
    content = <GigList gigInfo={gigInfo} />;
  } else if (onLoading) {
    content = <h2>Loading</h2>;
  }

  return (
    <div>
      <Input onAddValue={searchGig} />
      <section> {content} </section>
    </div>
  );
}

export default App;
