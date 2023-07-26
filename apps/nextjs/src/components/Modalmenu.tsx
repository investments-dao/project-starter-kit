import React from "react";

export default function Modalmenu() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
      <h3>Menú</h3>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                      Modal Title
                  </h3>         
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
<ul className="menu xl:menu-horizontal lg:min-w-max bg-primary rounded-box">
  <li>
    <a>Inmuebles</a>
    <ul>
      <li><a>Compra</a></li>
      <li><a>Venta</a></li>
      <li><a>Alquiler</a></li>
      <li><a>Permuta</a></li>
    </ul>
  </li>
  <li>
    <a>Actividades</a>
    <ul>
      <li><a>Playa</a></li>
      <li><a>Montaña</a></li>
      <li><a>Nocturnas</a></li>
      <li><a>Infantiles</a></li>
    </ul>
  </li>
  <li>
    <a>Anuncios</a>
    <ul>
      <li><a>Anuncia tu Inmueble Gratis</a></li>
      <li><a>Anuncia tu Actividad Gratis</a></li>
      
      <li>
        <a>Filiales</a>
        <ul>
          <li><a>Inmo-Ocio</a></li>
          <li><a>Dao.Surfclubb</a></li>
          
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a>INMO-OCIO</a>
    <ul>
      <li><a>Nosotros</a></li>
      <li><a>Contacto</a></li>
      <li><a>Política de privacidad y aviso legal</a></li>
      <li><a>Política de cookies</a></li>
      <li><a>Press kit</a></li>
    </ul>
  </li>
</ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}