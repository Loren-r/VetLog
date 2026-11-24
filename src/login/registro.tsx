export const Registro = () => {
  return (
    <div className="form-container" id="register-form">

            <div className="login-image">
              <img src="/src/assets/logo.png" alt="Logo de VetLog" className="logo" />
            </div>

                <div className="login-header">
                    <h1>Bienvenido</h1>
                    <h2>Crea tu cuenta</h2>
                </div>
                <form className="login" method="POST">
                    <label>Nombre completo</label>
                    <input type="text" name="nombre" placeholder="Tu nombre" />

                    <label>Correo electrónico</label>
                    <input type="email" name="correo" placeholder="ejemplo@correo.com" />
            
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="••••••••" />
            
                    <a id="to-login" href="#login-form">
                        ¿Ya tienes cuenta? Inicia sesión
                    </a>
                    <button type="submit" className="bttLog">Crear cuenta</button>
                </form>
                <img src="/src/assets/logo.png" alt="Logo de VetLog" className="logo" />
            </div>
  );
};
