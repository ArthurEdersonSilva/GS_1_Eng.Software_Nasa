package com.nasa.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.time.LocalDateTime;

@Service
public class AlertaCriticoService {

    @Autowired
    private AlertaCriticoRepository repository;

    public List<AlertaCritico> listarTodos() {
        return repository.findAll();
    }

    public AlertaCritico salvar(AlertaCritico alerta) {
        if (alerta.getTimestamp() == null) {
            alerta.setTimestamp(LocalDateTime.now());
        }
        if (alerta.getResolvido() == null) {
            alerta.setResolvido(false);
        }
        return repository.save(alerta);
    }
}