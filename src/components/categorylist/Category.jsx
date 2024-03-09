import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

function Category() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular categories</h1>
      <div className={styles.categories}>
        {/*  href="blog?cat=style" */}
        <Link href="/" className={`${styles.Category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link href="/" className={`${styles.Category} ${styles.fashion}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link href="/" className={`${styles.Category} ${styles.food}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link href="/" className={`${styles.Category} ${styles.travel}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link href="/" className={`${styles.Category} ${styles.culture}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link href="/" className={`${styles.Category} ${styles.coding}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
}

export default Category;
