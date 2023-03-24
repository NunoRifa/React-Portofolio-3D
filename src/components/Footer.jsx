import { styles } from "../style";

const Footer = () => {
  return (
    <div className={`${styles.paddingX} w-full p-5 bg-transparant text-right`}>
      &copy; <span className="font-medium text-[17px]">Nuno Rigo Fadilah</span>
    </div>
  );
};

export default Footer;
