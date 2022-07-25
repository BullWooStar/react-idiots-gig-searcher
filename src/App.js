import { useState } from "react";
import Input from "./components/Input";
import GigList from "./components/GigList";

function App() {
  const [gigInfo, setGigInfo] = useState(null);
  const [onLoading, setOnLoading] = useState(false);

  const searchGig = async (keyword) => {
    setOnLoading(true);
    try {
      const response = await fetch(
        `https://api.idiots.band/api/search?keyword=${keyword}`
      );
      const result = await response.json();
      setGigInfo(result);
    } catch {
      alert("ERROR!");
    } finally {
      setOnLoading(false);
    }
  };

  const isNotOnFetch = gigInfo === null;

  return (
    <div>
      <h1>이디어츠 공연 검색기</h1>
      <Input onSearchGig={searchGig} />
      <section>
        {onLoading ? <p>Loading</p> : null}
        {isNotOnFetch ? (
          <p style={{ textAlign: "center" }}>
            이디어츠는 누구와 같이 어떠한 공연을 했을까요?
            <br />
            밴드 이름을 검색해주세요~
          </p>
        ) : (
          <GigList gigInfo={gigInfo} />
        )}
      </section>
    </div>
  );
}

export default App;
