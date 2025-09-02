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
							<form
							  action="https://formspree.io/f/mblazgke"
							  method="POST"
							>
							  <label>
							    Your email:
							    <input type="email" name="email" />
							  </label>
							  <label>
  							  Your message:
							    <textarea name="message"></textarea>
							  </label>
							  <button type="submit">Send</button>
							</form>
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

