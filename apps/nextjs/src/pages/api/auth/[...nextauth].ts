import NextAuth from 'next-auth';
import { authOptions } from '@acme/auth';
<div>
 <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Inicia sesion en tu cuenta
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Logeate en tu cuenta.
                </p>
  </div>   
export default NextAuth(authOptions);
