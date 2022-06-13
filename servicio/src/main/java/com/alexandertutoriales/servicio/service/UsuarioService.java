package com.alexandertutoriales.servicio.service;

import com.alexandertutoriales.servicio.entity.Usuario;
import com.alexandertutoriales.servicio.repository.UsuarioRepository;
import com.alexandertutoriales.servicio.utils.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

import static com.alexandertutoriales.servicio.utils.Global.*;

@Service
@Transactional
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    public GenericResponse<Usuario> login(String usuario, String clave){
        Optional<Usuario> optU = this.repository.login(usuario, clave);
        if(optU.isPresent()){
            return new GenericResponse<>(TIPO_AUTH, RPTA_OK, "Credenciales Correctas", optU.get());
        }else{
            return new GenericResponse<>(TIPO_AUTH, RPTA_WARNING, "Credenciales Incorrectas", new Usuario());
        }
    }
}
