import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Page from "./Page";
import { getHomeList } from "../store/home/action";

const Home = () => {
  const home = useSelector(state => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeList());
  }, [dispatch]);

  return (
    <div>
      <div>This is home</div>
      <pre>{home.name}</pre>
      <ul>
        {home.list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          alert("666");
        }}
      >
        click
      </button>
      <Page></Page>
    </div>
  );
};

export default Home;
