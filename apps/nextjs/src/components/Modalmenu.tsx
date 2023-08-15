import React from 'react';
import Link from 'next/link';

export default function Modalmenu() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="mb-1 mr-1 rounded bg-green-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <h3>Menú</h3>
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-6xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-cyan-500 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">Investments-Dao</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-bg-black block h-6 w-6 text-3xl">X</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <ul className="menu rounded-box bg-primary xl:menu-horizontal lg:min-w-max">
                    <li>
                      <Link href="#" target="_blank">
                        INMUEBLES
                      </Link>
                      <ul>
                        <li>
                          <Link href="#" target="_blank">
                            Compra
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Venta
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Alquiler
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Permuta
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        ACTIVIDADES
                      </Link>
                      <ul>
                        <li>
                          <Link href="#" target="_blank">
                            Playa
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Montaña
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Nocturnas
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Infantiles
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        ANUNCIOS-GRATIS
                      </Link>
                      <ul>
                        <li>
                          <Link href="#" target="_blank">
                            Anuncia tu Inmueble Gratis
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Anuncia tu Actividad Gratis
                          </Link>
                        </li>

                        <li>
                          <Link href="#" target="_blank">
                            Filiales
                          </Link>
                          <ul>
                            <li>
                              <Link
                                href="https://inmocio.investments-dao.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Inmo-Ocio
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="https://dao.surfclubb.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Dao.Surfclubb
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        INMO-OCIO
                      </Link>
                      <ul>
                        <li>
                          <Link href="#" target="_blank">
                            Nosotros
                          </Link>
                        </li>
                        <li>
                          <Link href="/contacto" target="_blank">
                            Contacto
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Política de privacidad y aviso legal
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Política de cookies
                          </Link>
                        </li>
                        <li>
                          <Link href="#" target="_blank">
                            Press kit
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
