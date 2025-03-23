import React from "react";

function Potato() {
  return <h1>I like potato</h1>;
}
function App() { //App 컴포넌트 정의의
  return (
      <div>
        <h1>하현상 바보</h1>
        <Potato />
      </div>
    ); //App 컴포넌트가 HTML 반환
}

export default App;
