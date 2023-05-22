import React from "react";
import { RecoilRoot } from "recoil";
import Calendar from "./components/Calendar";
function App() {
  // const data = useRecoilValue(todoItemQuery);

  return (
    <div>
      <RecoilRoot>
        <Calendar />
      </RecoilRoot>
    </div>
  );
}

export default App;
