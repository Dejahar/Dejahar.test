import MainBottom from "./components/MainBottom";
import MainCards from "./components/MainCards";
import MainUpperMid from "./components/MainUpperMid";
import MainPresentation from "./components/MainPresentation";
import MainLowerMid from "./components/MainLowerMid";

export const Main = () => {
  return (
    <>
        <MainPresentation />
        <MainCards />
        <MainUpperMid />
        <MainLowerMid />
        <MainBottom />
    </>
  );
};
