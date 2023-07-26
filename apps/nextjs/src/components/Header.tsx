import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Modalmenu from "~/components/Modalmenu"
import React from "react";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (

    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-2xl font-bold ">
        
        
      </div>
      <div className="flex-none gap-2">
      <Modalmenu />
        <div className="dropdown-end dropdown">
        {sessionData?.user?.name ? `Conectado como ${sessionData.user.name}` : ""}
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

