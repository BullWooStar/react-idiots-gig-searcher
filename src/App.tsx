import { useState } from "react";
import Input from "./components/Input";
import GigList from "./components/GigList";
import React from "react";
import { RecoilRoot, atom } from "recoil";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export const inputBandName = atom({
  key: "inputBandName",
  default: null,
});

function App() {
  const [isNotOnFetch, setIsNotOnFetch] = useState(false);

  const isNotOnFetchHandler = () => {
    console.log("123");
    setIsNotOnFetch(false);
  };

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>이디어츠 공연 검색기</h1>
          <Input isNotOnFetchHandler={isNotOnFetchHandler} />
          <section>
            {isNotOnFetch ? (
              <p style={{ textAlign: "center" }}>
                이디어츠는 누구와 같이 어떠한 공연을 했을까요?
                <br />
                밴드 이름을 검색해주세요~
              </p>
            ) : (
              <GigList />
            )}
          </section>
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
