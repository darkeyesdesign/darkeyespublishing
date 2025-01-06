import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
	<>
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/assets/iiixi-logo-icon-2020-white.png"
          alt="darkeyes publishing logo"
          width={150}
          height={100}
          priority
        />
				<h2>Darkeyes Publishing</h2>
        <ul>
          <li>
						Check out our titles below.
          </li>
        </ul>

        <div className={styles.ctas}>
					<Image
						className={styles.thumbnail}
						src="/assets/screenshot-falling-asleep.png"
						alt="Falling Asleep"
						height={300}
						width={225}
						priority
					/>
          <a
            className={styles.primary}
            href="https://www.lulu.com/shop/bill-bunkum-and-bill-bunkum/falling-asleep/paperback/product-7kg44ky.html?q=dreadlore&page=1&pageSize=4"
            target="_blank"
            rel="noopener noreferrer"
          >
						Falling Asleep
          </a>
				</div>
				<div className={styles.ctas}>
					<Image
						className={styles.thumbnail}
						src="/assets/screenshot-dl-corebook-hardback.png"
						alt="DL hardback"
						height={300}
						width={225}
					/>
          <a
            href="https://www.lulu.com/shop/bill-bunkum-and-cameron-white-and-timothy-roberts-and-sharon-hurst/dreadlore-corebook-deluxe-hardback/hardcover/product-ekmn4v.html?q=dreadlore"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
          	DreadLore Corebook (hardback)
          </a>
				</div>
				<div className={styles.ctas}>
					<Image
						className={styles.thumbnail}
						src="/assets/screenshot-dl-corebook-paperback.png"
						alt="DL paperback"
						height={300}
						width={225}
					/>
          <a
            href="https://www.lulu.com/shop/bill-bunkum-and-cameron-white-and-sharon-hurst-and-dalton-anderson/dreadlore-corebook-deluxe-paperback/paperback/product-v89w77p.html?q=dreadlore&page=1&pageSize=4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
          	DreadLore Corebook (paperback)
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        	About 
        </a>
        <a
          href="https://www.redbubble.com/people/billbunkum/shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
        	Merch 
        </a>
				<a
          href="https://dreadlore.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
        	Newsletter 
        </a>
        <a
          href="https://www.lulu.com/spotlight/darkeyespublishing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Book Store →
        </a>
      </footer>
    </div>
	</>
  );
}
