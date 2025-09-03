import styles from "../page.module.css";

export default function Navigation() {
	return (
		<>
				<a
					href="/"
				>
					<img
						aria-hidden
						src="./house-solid.svg"
						alt="+"
						className={styles.invert}
						width={16}
						height={16}
					/>
					Home
				</a>

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
					href="/contact"
				>
					<img
						aria-hidden
						src="./contact.png"
						alt="+"
						width={16}
						height={16}
					/>
						Contact
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
          href="https://drive.google.com/drive/u/5/folders/1G0s_azVIMjwtDXdHzaqJE-VSDVgCaqwa"
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
         	Resources 
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

		</>
	);
}
