using AdminApp.Login;
using AdminApp.Login.DTOs;
using System.Web.Http;

namespace AdminApp.Server.Controllers
{
    public class LoginController : ApiController
    {
        private readonly ILoginApp app;

        public LoginController(ILoginApp app)
        {
            this.app = app;
        }

        [HttpPost]
        [Route("login/registrar-nuevo-usuario")]
        public IHttpActionResult RegistrarNuevoUsuario([FromBody]RegistrarNuevoUsuarioDto dto)
        {
            var transactionId = this.app.RegistrarNuevoUsuario(dto);
            return this.Ok(transactionId);
        }
    }
}
