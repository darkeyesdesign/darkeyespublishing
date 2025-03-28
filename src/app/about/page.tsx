import styles from "../page.module.css";
import Navigation from "../components/_navigation";

export default function About() {
  return (
	<>
    <div className={styles.page}>
      <main className={styles.main}>
				<ul>
					<li>
						<p><strong>Darkeyes Publishing</strong> creates eclectic works of fantasy fiction, short stories, poetry, and&nbsp;
							<a
								className={styles.inline} 
								href="https://dreadlore.com"
							>
								tabletop role playing games
							</a>. Many of these stories are set in the sword and sorcery world of Craster, a dying world with denizens who refuse to go quietly into the night.</p>

						<p>Darkeyes also creates system-agnostic adventure modules and locations which promote Player creativity and characterization.</p>
					</li>
					<li>
						<p>Our newest release is 
							<a
								className={styles.inline}
								href="https://www.lulu.com/shop/bill-bunkum-and-bill-bunkum/falling-asleep/paperback/product-7kg44ky.html?q=dreadlore&page=1&pageSize=4"
							>
								“Falling Asleep,”
							</a> an illustrated short story which follows the ruminations of Daria, a denizen of Craster and The Bonestone City, as she goes about her daily grind and must cope with the dregs of a past relationship.</p> 
					</li>
					<li>
						<p>Upcoming releases will include the novella, “Merriam and the Mark,” a tale of adventure that follows the assassin, Merriam Látast, and the squirrelly situation in which she finds herself.</p>	
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
