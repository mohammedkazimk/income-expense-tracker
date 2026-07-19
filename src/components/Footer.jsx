const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 p-6 text-center text-sm text-gray-400 md:flex-row">

        {/* Left */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">
            Income & Expense Tracker
          </span>
          . All Rights Reserved.
        </p>

        {/* Right */}
        <p>
          Developed with ❤️ by{" "}
          <span className="font-medium text-white">
            K Mohammed Kazim
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;