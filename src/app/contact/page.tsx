import styles from "../page.module.css";
import Navigation from "../components/_navigation";

export default function Contact() {
  return (
		<>
			<div className={styles.page}>
				<main className={styles.main}>
					<ul>
						<li>
							(Form under construction)
							Drop us a line via <a href="https://instagram.com/dreadloresystem">Instagram</a>.
						</li>
					</ul>
				</main>
				<footer className={styles.footer}>
					<Navigation />
				</footer>
			</div>
		</>
	);
}

