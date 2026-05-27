package com.nasa.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/alertas")
@CrossOrigin(origins = "*")
public class AlertaCriticoController {

    @Autowired
    private AlertaCriticoService service;

    @GetMapping
    public List<AlertaCritico> listarTodos() {
        return service.listarTodos();
    }

    @PostMapping
    public AlertaCritico salvar(@RequestBody AlertaCritico alerta) {
        return service.salvar(alerta);
    }
}