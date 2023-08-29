
import Link from "next/link"



const NotFound = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: "url(/404.svg)" }}>
           
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                
            <h1 className="mb-5 text-5xl font-bold">🏡INMO<span className="dark:text-purple-600">-OCIO🏄</span></h1>
                
                    <h3 className="mb-5 text-5xl font-bold">Estas sin Tabla y en medio del Mar.</h3>
                        <p className="mb-5">Asi que sigue nandando hasta la playa. Ja ja</p>
            
            <Link href={"/"} >
                <button className="btn btn-primary">Volver a la Playa</button>
            </Link>
        </div>
    </div>
</div>
 );
}

export default NotFound

