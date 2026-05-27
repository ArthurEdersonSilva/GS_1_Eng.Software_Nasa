package com.nasa.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SensorModuloService {

    @Autowired
    private SensorModuloRepository repository;

    public List<SensorModulo> listarTodos() {
        return repository.findAll();
    }

    public SensorModulo salvar(SensorModulo sensor) {
        // Aqui entrariam as regras de negócio (ex: validar limites de leitura)
        if (sensor.getStatus() == null || sensor.getStatus().isEmpty()) {
            sensor.setStatus("ATIVO");
        }
        return repository.save(sensor);
    }
}