package com.alexandertutoriales.servicio.config;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IniciarServicioConfig {
    @RequestMapping("/")
    public String iniciarServicio(){
        return "Servicio Iniciado Correctamente";
    }
}
