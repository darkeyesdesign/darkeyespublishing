import styles from "../page.module.css";
import Navigation from "../components/_navigation";

export default function Contact() {
  return (
		<>
			<div className={styles.page}>
				<main className={styles.main}>
					<ul>
						<li>
							Drop us a line via&nbsp;
							<u><a 
								href="https://instagram.com/dreadloresystem">Instagram
							</a></u>&nbsp;
							 or the Form below.
							<form
							  action="https://formspree.io/f/mblazgke"
								className={styles.contact_form}
							  method="POST"
							>
							  <label>
							    Your Email:
							  </label>
								<input type="email" name="email" />

							  <label>
									What's up?:
							  </label>
						    <textarea name="message"></textarea>

							  <label><button 
									className={styles.submit_button}
									type="submit">SEND
								</button>
								</label>

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

