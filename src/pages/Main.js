import Mainvisual from "./Mainvisual";
import Event from "./Event";
import Store from "./Store";
import Board from "./Board";
import { Stit, product, Ev, board } from "../data/data";

const Main = () => {
  return (
    <>
      <Mainvisual />
      <Event Stit={Stit} Ev={Ev} />
      <Store Stit={Stit} product={product} />
      <Board Stit={Stit} />
    </>
  );
};
export default Main;
