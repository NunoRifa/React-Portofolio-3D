import { error } from "../assets";
import { styles } from "../style";

import { SectionWrapper } from "../hoc";

const PageError = () => {
  return (
    <div className="bg-white">
      <div
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 flex justify-center items-center flex-col h-[100vh]`}
      >
        <img src={error} alt="Error" className="max-w-[400px] max-h-[400px]" />
        <div className="text-secondary w-full py-3 px-2 rounded-2xl text-center mt-2">
          <h3 className="text-[22px] font-bold">Something went wrong!</h3>
          <p className="text-[17px] font-medium mt-2">
            Your device OS version is not compatible with WebGL version, please
            use your PC or Laptop device! We'll be back to fix it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageError;
