import Main from "./components/Main";
import SideNav from "./components/SideNav";
import { MainProvider } from "./providers/main.provider";

function App() {
  return (
    <>
      <MainProvider>
        <h1 className="text-center text-2xl m-8 font-bold">Food App</h1>
        <div className="flex flex-row justify-between">
          <SideNav />
          <Main />
        </div>
      </MainProvider>
    </>
  );
}

export default App;
