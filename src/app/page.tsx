import styles from "./page.module.css";

export default function Home() {
  return (
	<>
    <div className={styles.page}>
      <main className={styles.main}>
        <img
          className={styles.logo}
          src="./iiixi-logo-icon-2020-white.png"
          alt="darkeyes publishing logo"
          width={150}
          height={100}
        />
				<h2>Darkeyes Publishing</h2>
        <ul>
          <li>
						Check out our titles below.
          </li>
        </ul>

        <div className={styles.ctas}>
					<img
						className={styles.thumbnail}
						src="./screenshot-falling-asleep.png"
						alt="Falling Asleep"
						height={300}
						width={225}
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
					<img
						className={styles.thumbnail}
						src="./screenshot-dl-corebook-hardback.png"
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
					<img
						className={styles.thumbnail}
						src="./screenshot-dl-corebook-paperback.png"
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
          href="./about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="./file.svg"
						alt="+"
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
          <img
            aria-hidden
            src="./window.svg"
						alt="+"
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
          <img
            aria-hidden
            src="./window.svg"
						alt="+"
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
          <img
            aria-hidden
            src="./globe.svg"
						alt="+"
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
