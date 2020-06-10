
package com.example.ejemplo01;

import javax.persistence.*;

@Entity
@Table(name = "employes")
public class Persona {

    @Id
    @Column(name = "idcliente")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcliente;
    @Column(name = "Nombre")
    private String Nombre;
    @Column(name = "Apellido")
    private String Apellido;
    @Column(name = "Cuenta")
    private String Cuenta;

    public int getId() {
        return idcliente;
    }

    public void setId(int id) {
        this.idcliente = id;
    }

    public String getName() {
        return Nombre;
    }

    public void setName(String name) {
        this.Nombre = name;
    }

    public String getApellidos() {
        return Apellido;
    }

    public void setApellidos(String apellido) {
        this.Apellido = apellido;
    }

    public String getCuenta() {
        return Cuenta;
    }

    public void setCuenta(String cuenta) {
        this.Cuenta = cuenta;
    }

}
