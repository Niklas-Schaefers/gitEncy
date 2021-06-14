import React, { useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import SearchField from "../../components/SearchField/SearchField";
import BubbleHeader from "../../components/Styling Elements/BubbleHeader";
import styles from "./Search.module.css";

function Search(): JSX.Element {
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search..."
        />
      </form>
      <div className={styles.result}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          dolore est magni odit earum sequi tempore dolorum perspiciatis illum!
          Repellendus nostrum voluptatem nemo enim nisi saepe quam, molestiae
          dolorem illo.
        </p>
      </div>
      <div className={styles.footerMenu}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Search;
