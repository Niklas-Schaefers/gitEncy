import React, { useState } from "react";
import CatLogo from "../Icons/CatLogo";
import SearchField from "../SearchField/SearchField";
import BubbleHeader from "../Styling Elements/BubbleHeader";
import styles from "./HeaderSearch.module.css";

type HeaderSearchProps = {
  onSubmit: (searchValue: string, filterValue: string) => void;
};

function HeaderSearch({ onSubmit }: HeaderSearchProps): JSX.Element {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.bubbleHeader}>
        <BubbleHeader />
      </div>
      <div className={styles.catLogo}>
        <CatLogo />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(search, user);
        }}
        className={styles.form}
      >
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search for code..."
        />
        <SearchField
          value={user}
          onChange={setUser}
          placeholder="Please enter GitHub user..."
        />
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default HeaderSearch;
