package com.alexandertutoriales.servicio.repository;

import com.alexandertutoriales.servicio.entity.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    @Query("SELECT U FROM Usuario U WHERE U.usuario=:usuario AND U.clave=:clave")
    Optional<Usuario> login(String usuario, String clave);
}
