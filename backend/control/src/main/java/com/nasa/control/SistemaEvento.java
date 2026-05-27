package com.nasa.control;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SistemaEvento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String sistemaAfetado; // Ex: Navegação, Suporte de Vida
    private String descricao;      // Ex: Reinicialização do sistema de telemetria
    private LocalDateTime timestamp = LocalDateTime.now(); // Grava a hora exata do evento
}