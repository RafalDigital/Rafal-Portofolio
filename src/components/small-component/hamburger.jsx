const Hamburger = (setIsOpen, isOpen) => {
    // Style dasar untuk bar/garis
  const genericBar = "h-1 w-6 my-0.5 rounded-full bg-tertiary transition ease-in-out duration-300 rounded-2xl";
  
  return (
      <button
      className="flex flex-col h-10 w-10 justify-center items-center group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      >
      <span
        className={`${genericBar} ${
          isOpen
            ? "rotate-45 translate-y-2 opacity-100"
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
          ? "-rotate-45 -translate-y-2 opacity-100"
            : "opacity-100"
        }`}
      />
    </button>
  );
}

export default Hamburger;