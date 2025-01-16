import {Link,Element} from 'react-scroll';
import {GetStaticProps} from 'next';
import ReactMarkdown from 'react-markdown';

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(' ').join('_');
}

export default function PrivacyPage() {

  return (
    <>
      <section className="mx-auto w-full max-w-1920 bg-light px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <header className="mb-10 sm:mt-2 lg:mb-14 xl:mt-4">
          <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
            Politicas de privacidad
          </h1>
          <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
            5 min read
          </p>
        </header>
        {/* End of page header */}

        <div className="flex flex-col md:flex-row">
          <nav className="mb-8 md:mb-0 md:w-72 xl:w-3/12">
            <ol className="sticky z-10 md:top-16 lg:top-22">
              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('intro')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Introducción
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('recopilation')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Recopilación de Datos
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('usage')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Uso de Datos
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('data_sharing')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Compárticion de Datos
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('data_security')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Seguridad de Datos
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('user_rights')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Derechos del Usuario
                </Link>
              </li>

              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('changes')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Cambios en la Política de Privacidad
                </Link>
              </li>

              <li>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId('contact')}
                  activeClass="text-sm lg:text-base text-heading font-semibold"
                  className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                >
                  Contacto
                </Link>
              </li>
            </ol>
          </nav>
          {/* End of section scroll spy menu */}

          <div className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">
            <Element
              name={makeTitleToDOMId('intro')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Introducción
              </h2>
              <ReactMarkdown>
                {`
**1. Introducción**
Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos los datos de los usuarios de nuestra aplicación, Trablisa by Era App
                `}
              </ReactMarkdown>
            </Element>
            <Element
              name={makeTitleToDOMId('recopilation')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Recopilación de Datos
              </h2>
              <ReactMarkdown>
                {`
**2. Recopilación de Datos**
Nuestra aplicación recopila los siguientes tipos de datos:
Información de perfil del usuario (nombre, correo electrónico, etc.)
Datos de uso (preferencias, historial de navegación, etc.)
Datos de ubicación (solo si el usuario da su consentimiento)

                `}
              </ReactMarkdown>
            </Element>

            <Element
              name={makeTitleToDOMId('intro')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Uso de Datos
              </h2>
              <ReactMarkdown>
                {`
**3. Uso de Datos**
Los datos recopilados se utilizan para:
Proporcionar y mejorar nuestros servicios
Personalizar la experiencia del usuario
Comunicarnos con los usuarios
Cumplir con requisitos legales y regulatorios
                `}
              </ReactMarkdown>
            </Element>
            <Element
              name={makeTitleToDOMId('data_sharing')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Compárticion de Datos
              </h2>
              <ReactMarkdown>
                {`

**4. Compartición de Datos**
No compartimos los datos de los usuarios con terceros sin su consentimiento explícito, excepto cuando sea requerido por ley.
                `}
              </ReactMarkdown>
            </Element>

            <Element
              name={makeTitleToDOMId('data_security')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Seguridad de Datos
              </h2>
              <ReactMarkdown>
                {`
**5. Seguridad de Datos**
Tomamos medidas de seguridad adecuadas para proteger los datos de los usuarios contra accesos no autorizados, modificaciones y pérdidas.
                `}
              </ReactMarkdown>
            </Element>

            <Element
              name={makeTitleToDOMId('user_rights')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Derechos del Usuario
              </h2>
              <ReactMarkdown>
                {`
**6. Derechos del Usuario**
Los usuarios tienen el derecho de acceder, rectificar, suprimir y oponerse al tratamiento de sus datos personales.
`}
              </ReactMarkdown>
            </Element>


            <Element
              name={makeTitleToDOMId('changes')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Cambios en la Política de Privacidad
              </h2>
              <ReactMarkdown>
                {`
**7. Cambios en la Política de Privacidad**
Podemos actualizar esta política de privacidad de vez en cuando. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestra aplicación.
`}
              </ReactMarkdown>
            </Element>

            <Element
              name={makeTitleToDOMId('contact')}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                Contacto
              </h2>
              <ReactMarkdown>
                {`
**8. Contacto**
Para cualquier pregunta o inquietud sobre esta política de privacidad, por favor, contáctenos a través de soporte@sphereag.com.
`}
              </ReactMarkdown>
            </Element>
          </div>
          {/* End of content */}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    },
  };
};
