import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Modalmenu from "~/components/Modalmenu"
import React from "react";
import Link from 'next/link';

export const Header = () => {
  const { data: sessionData } = useSession();

  return (

    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-2xl font-bold ">
      <Link className="btn btn-ghost normal-case text-xl"
      href="/">Inmo-Ocio</Link>
      </div>

      <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">
                  <p>Anuncias Gratis tu Inmueble</p>
                </Link></li>
        
        <li><Link href="/">
                  <p>Anuncia Gratis tu Negocio</p>
                </Link></li>
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">
                  <p>Anuncia Gratis tu Inmueble</p>
                </Link></li>
     
      <li><Link href="/">
                  <p>Anuncia Gratis tu Negocio</p>
                </Link></li>
    </ul>
  </div>

      
      
      <div className="flex-none gap-2">
      <Modalmenu />
        <div className="dropdown-end dropdown">
        {sessionData?.user?.name ? `conect-${sessionData.user.name}` : ""}
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <button
        className="btn-ghost rounded-btn btn"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Cerrar Sesesión" : "Iniciar Sesión"}
      </button>
      
          )}
        </div>
      </div>
    </div>
  );
};

