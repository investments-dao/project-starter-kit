type ErrorMessages = {
  [key: string]: string;
};

const errors: ErrorMessages = {
  Signin: 'Intente iniciar sesión con una cuenta diferente.',
  OAuthSignin: 'Intente iniciar sesión con una cuenta diferente.',
  OAuthCallback: 'Intente iniciar sesión con una cuenta diferente.',
  OAuthCreateAccount: 'Intente iniciar sesión con una cuenta diferente.',
  EmailCreateAccount: 'Intente iniciar sesión con una cuenta diferente.',
  Callback: 'Intente iniciar sesión con una cuenta diferente.',
  OAuthAccountNotLinked:
    'Para confirmar su identidad, inicie sesión con la misma cuenta que utilizó originalmente.',
  EmailSignin: 'Verifique su dirección de correo electrónico.',
  CredentialsSignin:
    'Fallo al iniciar sesion. Comprueba que los datos que proporcionaste son correctos.',
  UserNotFound: 'Usuario no encontrado.',
  default: 'Incapaz de acceder.',
};

export const AuthError = (error = 'default'): string => errors[error] as string;
