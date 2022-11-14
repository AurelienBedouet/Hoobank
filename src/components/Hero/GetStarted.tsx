import styles from "../../style";
import { arrowUp } from "../../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} get-started-circle z-0 border-none outline-none w-36 h-36 rounded-full bg-blue-gradient p-[2px] cursor-pointer relative`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row gap-2`}>
        <p className="font-poppins font-medium text-lg leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-6 h-6 object-contain" />
      </div>

      <p className="font-poppins font-medium text-lg leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
