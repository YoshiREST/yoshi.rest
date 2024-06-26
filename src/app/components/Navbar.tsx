import React      from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <section className="">
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  return (
      <div>
          <nav
              className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] bg-gradient-to-r from-orange-400 to-pink-400 p-3 text-sm text-neutral-50 fill-white">

              <NavLink redirect={'/'}>  Home  </NavLink>
              <NavLink redirect={'/docs'}>  Docs  </NavLink>
              <NavLink redirect={'/terms'}>   Terms   </NavLink>
              <NavLink redirect={'/privacy'}> Privacy </NavLink>
          </nav>
      </div>
  );
};

const NavLink = ({children, redirect}: { children: string, redirect: string }) => {
    return (
        <a href={redirect} rel="nofollow" className="block overflow-hidden">
            <motion.div
                whileHover={{y: -20}}
                transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};
