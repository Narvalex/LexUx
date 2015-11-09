using AdminApp.Login.DTOs;
using System;

namespace AdminApp.Login
{
    public interface ILoginApp
    {
        Guid RegistrarNuevoUsuario(RegistrarNuevoUsuarioDto dto);
    }
}