package com.alexandertutoriales.servicio.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 50)
    private String usuario;
    @Column(length = 20)
    private String clave;
    @Column
    private boolean estado;
}
