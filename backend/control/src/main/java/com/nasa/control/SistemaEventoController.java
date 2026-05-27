package com.nasa.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@CrossOrigin(origins = "*")
public class SistemaEventoController {

    @Autowired
    private SistemaEventoService service;

    @GetMapping
    public List<SistemaEvento> listarTodos() {
        return service.listarTodos();
    }

    @PostMapping
    public SistemaEvento salvar(@RequestBody SistemaEvento evento) {
        return service.salvar(evento);
    }
}