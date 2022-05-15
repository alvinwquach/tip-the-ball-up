function Navbar() {
  return (
    <div className="navbar fixed top-0 bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-neutral-content p-2 text-neutral shadow"
          >
            <li>
              <a data-scroll="home" href="#home">
                Home
              </a>
            </li>
            <li>
              <a data-scroll="player" href="#player">
                Player
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden bg-neutral lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#player">Player</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end bg-neutral">
        <a
          className="btn btn-ghost bg-neutral text-xl uppercase"
          href="https://alvinsblog.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Player
        </a>
      </div>
    </div>
  )
}

export default Navbar
