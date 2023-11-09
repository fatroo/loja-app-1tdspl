export default function LoginUsers() {
    return (
      <div className="login-user">
        <h1>Identificação de Usuários</h1>
        <h2>-</h2>
        <div>
          <form>
            <fieldset>
              <legend>Login</legend>
              <div>
                <label htmlFor="idEmail">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  id="idEmail"
                  placeholder="Digite seu e-mail"
                />
              </div>
  
              <div>
                <label htmlFor="idSenha">SENHA:</label>
                <input
                  type="password"
                  name="senha"
                  id="idSenha"
                  placeholder="Digite sua senha"
                />
              </div>
              <div>
                <button>Entrar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
  