import { clients } from "../data";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-6`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(({ id, logo, alt }) => (
        <div
          key={id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img src={logo} alt={alt} className="sm:w-48 w-24 object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
