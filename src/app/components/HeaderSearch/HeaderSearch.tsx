import React, { useState } from "react";
import CatLogo from "../Icons/CatLogo";
import PlusIcon from "../Icons/PlusIcon";
import SearchField from "../SearchField/SearchField";
import BubbleHeader from "../Styling Elements/BubbleHeader";
import styles from "./HeaderSearch.module.css";

function HeaderSearch(): JSX.Element {
  const [search, setSearch] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Search`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bubbleHeader}>
        <BubbleHeader />
      </div>
      <div className={styles.catLogo}>
        <CatLogo />
      </div>
      <div className={styles.plusIcon}>
        <PlusIcon />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search..."
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
