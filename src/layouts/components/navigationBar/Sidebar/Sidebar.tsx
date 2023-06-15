export const Sidebar = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between bg-stone-100 dark:bg-darkmode-body">
      <div className="flex items-center justify-center px-4 py-6 md:justify-end">
        <ul className="black-text mt-6 space-y-1">
          <li className="flex items-center justify-center md:items-start md:justify-start">
            <a
              href="/about"
              className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-200 hover:text-gray-700">
              About
            </a>
          </li>
          <li className="flex items-center justify-center md:items-start md:justify-start">
            <a
              href="/contact"
              className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-200 hover:text-gray-700">
              Contact
            </a>
          </li>
          <li className="flex items-center justify-center md:items-start md:justify-start">
            <a
              href="/"
              className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-200 hover:text-gray-700">
              Donate
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div> */}
    </div>
  );
};
