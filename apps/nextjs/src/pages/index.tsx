import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '~/components/Header';

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "Equipo Investments-Dao" });

  return (
    <>
      <Head>
        <title>Inmo-Ocio</title>
        <meta name="description" content="Inmo-Ocio por equipo Investments-Dao.com" />
        <link rel="icon" href="/favicon/icon.svg" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Investments<span className="text-[hsl(280,100%,70%)]">-Dao</span>
          </h1>
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Inmo-<span className="text-[hsl(280,100%,70%)]">Ocio</span>
          </h2>
          <div className="lg:grid-col-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://app.investments-dao.com"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Inversiones-Comunitarias →</h3>
              <div className="text-lg">
                La auto-promoción en comunidad de bienes es una opción para adquirir su vivienda a
                precio de coste.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://app.investments-dao.com"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Descubra como realizar inversiones comunitarias atraves del DAO. Obtenga información
                sobre de Investments-Dao.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://inmocio.investments-dao.com"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Inmobiliaria →</h3>
              <div className="text-lg">
                Puede publicar Gratis su Propiedad de: -Venta -Alquiler.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://inmocio.investments-dao.com"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Actividades →</h3>
              <div className="text-lg">Puede publicar Gratis su Actividad de: -Turismo -Ocio.</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
// Antes del panultimo <div> 1 parte
// <div className="flex flex-col items-center gap-2">
//    <p className="text-2xl text-white">{hello.data ? hello.data.greeting : "Cargando consulta ..."}</p>
//    <AuthShowcase />
// </div>
// Al final despues '}' cierre
//function AuthShowcase() {
//  const { data: sessionData } = useSession();
//
//  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//    undefined, // no input
//    { enabled: sessionData?.user !== undefined }
//  );
//
//  return (
//    <div className="flex flex-col items-center justify-center gap-4">
//      <p className="text-center text-2xl text-white">
//        {sessionData && <span>Conectado como {sessionData.user?.name}</span>}
//        {secretMessage && <span> - {secretMessage}</span>}
//      </p>
//      <button
//        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//        onClick={sessionData ? () => void signOut() : () => void signIn()}
//      >
//        {sessionData ? "Cerrar Sesesión" : "Iniciar Sesión"}
//      </button>
//    </div>
//  );
//}
