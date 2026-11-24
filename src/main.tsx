import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <section className="login-main">
            <div className="form-container" id="login-form">
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
                    <a id="to-login" href="#register-form">
                        ¿No tienes cuenta? Regístrate
                    </a>
                </form>
            </div>
        </section>
  </StrictMode>,
)
