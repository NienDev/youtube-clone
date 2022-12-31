import "./App.css";
import ChipsWrapper from "./components/ChipsWrapper/ChipsWrapper";
import Contents from "./components/Contents/Contents";
import Icon from "./components/Icon/Icon";
import Navbar from "./components/Navbar/Navbar";
import GuideWrapper from "./components/GuideWrapper/GuideWrapper";
import Counter from "./components/UseEffectPractice/Counter";
import "./components/Scrollbar/Scollbar.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="flex   h-[calc(100vh-56px)] ">
        <section className="">
          <GuideWrapper />
        </section>
        <section className="bg-[black] h-full  sm:pl-8  overflow-y-scroll overflow-x-hidden scrollbar-style-content w-full">
          <ChipsWrapper />
          <Contents />
        </section>
      </main>
    </div>
  );
}

export default App;
