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

      
      <ul>
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
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

