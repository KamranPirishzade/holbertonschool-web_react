import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils"; // diqqət, getFullYear yox, getFullYear istifadə edin
import AppContext from "../App/AppContext";

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className={css(styles.footer)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p id="conctacUs">
          <a>Contact us</a>
        </p>
      )}
    </footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "3px solid #e11d3f",
    padding: "1rem 0",
  },
});
