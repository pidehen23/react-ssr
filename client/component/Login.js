import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import styles from "./login.css";

const Login = () => {
  useStyles(styles);

  return (
    <div>
      <div className={styles.Title}>This is Login</div>
    </div>
  );
};

export default Login;
