package com.nasa.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/sensores")
@CrossOrigin(origins = "*")
public class SensorModuloController {

    @Autowired
    private SensorModuloService service;

    @GetMapping
    public List<SensorModulo> listarTodos() {
        return service.listarTodos();
    }

    @PostMapping
    public SensorModulo salvar(@RequestBody SensorModulo sensor) {
        return service.salvar(sensor);
    }
}