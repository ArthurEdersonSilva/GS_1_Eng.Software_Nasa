package com.nasa.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.time.LocalDateTime;

@Service
public class SistemaEventoService {

    @Autowired
    private SistemaEventoRepository repository;

    public List<SistemaEvento> listarTodos() {
        return repository.findAll();
    }

    public SistemaEvento salvar(SistemaEvento evento) {
        if (evento.getTimestamp() == null) {
            evento.setTimestamp(LocalDateTime.now());
        }
        return repository.save(evento);
    }
}