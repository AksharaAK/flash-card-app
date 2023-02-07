import GlobeLogo from "./GlobeLogo";

export const Header = () => {
  return (
    <nav class="sticky top-0 z-10 bg-black  font-semibold tracking-tighter">
      <div class="mx-auto max-w-5xl">
        <div class="flex justify-around">
          <a href="/" class="flex flex-col items-center py-4">
            <GlobeLogo />{" "}
          </a>
          <div class="flex flex-col items-center justify-center">
            <h1 class=" text-base font-bold uppercase  tracking-tighter text-white">
              Around the World
            </h1>
            <h6 class=" lead text- text-xs font-semibold uppercase text-custom-grey ">
              in x days
            </h6>
          </div>
          <div class="flex items-center space-x-10 ">
            <a
              href="/capitals"
              class="py-4 text-sm text-white hover:text-custom-grey"
            >
              Capitals
            </a>
            <a
              href="/flags"
              class="py-4 text-sm text-white hover:text-custom-grey"
            >
              Flags
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
