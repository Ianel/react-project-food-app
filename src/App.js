import Main from "./components/Main";
import SideNav from "./components/SideNav";
import { MainProvider } from "./providers/main.provider";

function App() {
  return (
    <>
      <MainProvider>
        <h1 className="text-center text-2xl lg:m-8 m-4 font-bold">Food App</h1>
        <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-between">
          <SideNav />
          <Main />
        </div>
      </MainProvider>
    </>
  );
}

export default App;
