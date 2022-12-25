import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-6 dark:bg-dark">
      <div className="links flex flex-col md:flex-row justify-start items-start md:items-center gap-8">
        <div className="logo flex justify-start gap-2 items-center">
          <div className="logo-icon">
            <Image
              height={100}
              width={20}
              src="/voltec-logo.svg"
              className="hue-rotate-[-15deg]"
              alt="Voltec Logo"
            />
          </div>
          <h1 className="text-2xl dark:text-headings-dark md:text-3xl tracking-tight font-bold">
            vol<span className="text-[#489FD0]">tec</span>.link
          </h1>
        </div>
        <div className="links-to-socials flex flex-col md:flex-row justify-start items-start md:items-center gap-4 text-neutral-400 dark:text-secondary-dark">
          <a
            href="https://instagram.com/voltecrobotics6647"
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:voltec@servicios.tec.mx"
            target={"_blank"}
            rel="noreferrer"
          >
            Email
          </a>
          <a
            href="https://twitter.com/voltec6647"
            target={"_blank"}
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/VOLTECrobotics6647"
            target={"_blank"}
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
      <hr />
      <div className="copyright-information">
        <p className="text-sm text-gray-400 dark:text-secondary-dark">
          &copy; {new Date().getFullYear()} VOLTEC Robotics 6647. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
