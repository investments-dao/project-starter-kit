import Breadcrumb from '~/components/Common/Breadcrumb';
import Contacto from '~/components/Contacto/Contacto';

function contacto() {
  return (
    <>
      <Breadcrumb
        pageName="Contacto con Investments-Dao"
        description="Estamos encantados de Ayudar. Hablamos?."
      />

      <Contacto />
    </>
  );
}

export default contacto;
