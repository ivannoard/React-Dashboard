import AppContext from "./contexts/AppContext";
import Router from "./router";

function App() {
  return (
    <>
      <AppContext>
        <Router />
      </AppContext>
    </>
  );
}

export default App;
