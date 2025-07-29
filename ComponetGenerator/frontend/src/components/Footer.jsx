const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white flex flex-col justify-center items-center w-full py-2 text-xs">
      <div className="logo font-semibold text-lg">
        <span className="text-green-500">Ai</span>
        <span>Code</span>
        <span className="text-green-500">Genrator</span>
      </div>
      <div className="text-center mt-1">
        &copy; {new Date().getFullYear()} Amber-dev | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
