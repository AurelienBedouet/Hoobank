import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Hero Text */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
        <img src={discount} alt="discount" className="w-8 h-8" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-5xl text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    {/* Hero Image */}
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-full h-full relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-2/5 h-1/3 top-0 pink__gradient" />
      <div className="absolute z-[1] w-4/5 h-4/5 rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-1/2 h-1/2 right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
