const Hamburger = (props) => {
    // Style dasar untuk bar/garis
  const genericBar = "h-1 w-8 my-1 rounded-full bg-tertiary transition ease-in-out duration-300 rounded-2xl";
  
  const isOpen = props.isOpen;

  return (
      <button
      className="flex flex-col h-14 w-14 justify-center items-center group cursor-pointer"
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