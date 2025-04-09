import styles from "./page.module.css";
import Navigation from "./components/_navigation";

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

	      <header className={styles.header}>
					<Navigation />
   	   	</header>

				<hr />

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
						Falling Asleep (short story)
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

				<div className={styles.ctas}>
					<img
						className={styles.thumbnail}
						src="./cover-character-sheet.png"
						alt="Character Sheet"
						height={300}
						width={225}
					/>
          <a
            href="https://www.drivethrurpg.com/en/product/432975/dreadlore-character-sheet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
          	DL Character Sheet (pdf)	
          </a>
				</div>

				<div className={styles.ctas}>
					<img
						className={styles.thumbnail}
						src="./cover-2-theurgist-atop-seers-hill-adventure-location-vertical-small-fin.png"
						alt="The Theurgist Atop Seer's Hill"
						height={300}
						width={225}
					/>
          <a
            href="https://www.drivethrurpg.com/en/product/503951/the-theurgist-atop-seer-s-hill-adventure-location"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
          	The Theurgist Atop Seer's Hill (module)	
          </a>
				</div>

				<div className={styles.ctas}>
					<img
						className={styles.thumbnail}
						src="./the-keeping-cave-cover.png"
						alt="The Keeping Cave (module)"
						height={300}
						width={225}
					/>
          <a
            href="https://www.drivethrurpg.com/en/product/432251/the-keeping-cave-adventure-module"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
          	The Keeping Cave (module)	
          </a>
				</div>

				<div className={styles.ctas}>
					<img
						className={styles.thumbnail}
						src="./gsg-v.1.2-cover.jpg"
						alt="Getting Started Guide"
						height={300}
						width={225}
					/>
          <a
            href="https://www.drivethrurpg.com/en/product/432935/dreadlore-getting-started-guide-updated-v-1-2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
          	DreadLore Getting Started Guide (pdf)	
          </a>
				</div>

      </main>

      <footer className={styles.footer}>
				<Navigation />
      </footer>
    </div>
	</>
  );
}
