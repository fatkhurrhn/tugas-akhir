import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "ri-home-4-line", activeIcon: "ri-home-4-fill", label: "Home" },
    { path: "/literasi", icon: "ri-a-b", activeIcon: "ri-a-b", label: "Literasi" },
    { path: "/numerasi", icon: "ri-calculator-line", activeIcon: "ri-calculator-fill", label: "Numerasi" },
    { path: "/islamic", icon: "ri-moon-clear-line", activeIcon: "ri-moon-clear-fill", label: "islamic" },
    { path: "/profike", icon: "ri-account-circle-line", activeIcon: "ri-account-circle-fill", label: "Profile" },
  ];

  const MAIN_PREFIXES = navItems.map((i) => i.path).filter((p) => p !== "/");

  const normalizedPathname = (() => {
    const p = location.pathname.replace(/\/+$/, "");
    return p === "" ? "/" : p;
  })();

  const getActivePath = (pathname) => {
    if (pathname === "/") return "/";
    const matched = MAIN_PREFIXES.find((p) => p !== "/more" && pathname.startsWith(p));
    return matched || "/more";
  };

  const activePath = getActivePath(normalizedPathname);

  return (
    <>
      {/* Bottom Nav */}
      <div className="fixed max-w-[450px] mx-auto bottom-0 left-0 right-0 z-50 bg-[#fcfeff] shadow-[0_-2px_5px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-5 h-14">
          {navItems.map((item) => {
            const isActive = item.path === activePath;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center text-[11px]"
              >
                <i
                  className={`${isActive ? item.activeIcon : item.icon} text-[22px] ${isActive ? "text-[#355485]" : "text-[#355485]"
                    }`}
                ></i>
                <span
                  className={
                    isActive
                      ? "text-[#355485] font-medium"
                      : "text-[#44515f]"
                  }
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
