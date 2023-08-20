import Link from "next/link";
import React from "react";
import styles from "./hero-link.module.scss"

interface HeroLinkProps {
  href: string;
  content: string;
}

export function HeroLink(props: HeroLinkProps) {
  return (
    <Link
      href={props.href}
      className={styles.link}
    >
      {props.content}
      <div className={"border-4"}></div>
    </Link>
  );
}
