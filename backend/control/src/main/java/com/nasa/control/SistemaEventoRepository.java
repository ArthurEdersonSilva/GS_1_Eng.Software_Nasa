package com.nasa.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SistemaEventoRepository extends JpaRepository<SistemaEvento, Long> {
}