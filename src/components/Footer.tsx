import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../data";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-72 h-[76px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-center xxs:justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map(footerlink => (
          <div
            key={footerlink.title}
            className={`flex flex-col text-center xxs:text-left ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-lg leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-base leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins text-center text-sm font-extralight leading-[27px] text-dimWhite">
        Copyright &copy; 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map(({ id, icon, name, link }, index) => (
          <img
            key={id}
            src={icon}
            alt={name}
            className={`w-6 h-6 object-contain cursor-pointer transition duration-300 transform hover:scale-110 ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
