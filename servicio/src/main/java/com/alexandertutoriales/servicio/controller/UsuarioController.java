package com.alexandertutoriales.servicio.controller;

import com.alexandertutoriales.servicio.entity.Usuario;
import com.alexandertutoriales.servicio.service.UsuarioService;
import com.alexandertutoriales.servicio.utils.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioService service;

    @PostMapping("/login")
    public GenericResponse<Usuario> login(HttpServletRequest request){
        String usuario = request.getParameter("usuario");
        String clave = request.getParameter("clave");
        return this.service.login(usuario, clave);
    }
}
