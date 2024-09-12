import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import { Homepageinfo } from "./Components/Homepageinfo/Homepageinfo";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return <div className={styles.App}>
        <Navbar />
        <Landing />
        <Homepageinfo />
        <Footer />
    </div>;
}

export default App
