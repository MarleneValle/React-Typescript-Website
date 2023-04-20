import { useEffect } from "react";
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";


type Props = {
  selectedPage: string,
  setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between" 

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
              <div className={`${flexBetween} w-full gap-16`}>
                {/* LEFT SIDE */}
                <img src={Logo} alt="logo" />

                {/* RIGHT SIDE */}
                <div className={`${flexBetween} w-full`}>
                  {/* INNER LEFT - FROM RIGHT SIDE  */}
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Inicio" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Nosotros" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Promociones" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Clientes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>
                  {/* INNER RIGTH SIDE - FROM RIGHT SIDE  */}
                  <div className={`${flexBetween} gap-8`}>
                    <Link page="Regístrate" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contáctanos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>
                </div> 
              </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar;