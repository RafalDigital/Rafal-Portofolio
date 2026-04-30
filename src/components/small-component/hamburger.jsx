const Hamburger = (setIsOpen, isOpen) => {
    // Style dasar untuk bar/garis
  const genericBar = "h-0.5 w-6 my-0.5 rounded-full bg-black transition ease-in-out duration-300";
  
  return (
      <button
      className="flex flex-col h-10 w-10 justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
      >
      <span
        className={`${genericBar} ${
          isOpen
            ? "rotate-45 translate-y-1.5 opacity-100"
            : "opacity-100"
        }`}
      />
      <span
        className={`${genericBar} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`${genericBar} ${
          isOpen
          ? "-rotate-45 -translate-y-1.5 opacity-100"
            : "opacity-100"
        }`}
      />
    </button>
  );
}

export default Hamburger;