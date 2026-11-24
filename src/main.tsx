import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <section className="login-main">

            <div className="form-container active" id="login-form">
                <div className="login-header">
                    <h1>Bienvenido a VetLog</h1>
                    <h2>Ingresa a tu Sesión</h2>
                </div>
                <form className="login" method="POST">
                    <label>Correo electrónico</label>
                    <input name="correo" type="email" placeholder="johndoe@example.com" required />

                    <label>Contraseña</label>
                    <input name="password" type="password" placeholder="*******" required />

                    <button type="submit" className="bttLog">Ingresar</button>
                    <a id="to-login">Crear cuenta</a>
                </form>
            </div>
            
            <div className="form-container" id="register-form">
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
            
                    <a id="to-login">¿Ya tienes cuenta? Inicia sesión</a>
                    <button type="submit" className="bttLog">Crear cuenta</button>
                </form>
            </div>
        </section>
  </StrictMode>,
)
