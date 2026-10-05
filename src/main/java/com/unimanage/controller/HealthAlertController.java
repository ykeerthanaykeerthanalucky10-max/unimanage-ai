package com.unimanage.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unimanage.entity.HealthAlert;
import com.unimanage.service.HealthAlertService;

@RestController
@RequestMapping("/api/health-alerts")
@CrossOrigin(origins = "*")
public class HealthAlertController {

    private final HealthAlertService service;

    public HealthAlertController(HealthAlertService service) {
        this.service = service;
    }

    @PostMapping
    public HealthAlert addAlert(@RequestBody HealthAlert alert) {
        return service.addAlert(alert);
    }

    @GetMapping
    public List<HealthAlert> getAllAlerts() {
        return service.getAllAlerts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthAlert> getAlert(
            @PathVariable Integer id) {

        HealthAlert alert = service.getAlertById(id);

        if (alert == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(alert);
    }

    @GetMapping("/student/{studentId}")
    public List<HealthAlert> getByStudentId(
            @PathVariable Integer studentId) {

        return service.getByStudentId(studentId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HealthAlert> updateAlert(
            @PathVariable Integer id,
            @RequestBody HealthAlert alert) {

        HealthAlert updated =
                service.updateAlert(id, alert);

        if (updated == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAlert(
            @PathVariable Integer id) {

        service.deleteAlert(id);

        return ResponseEntity.ok(
                "Health alert deleted successfully");
    }
}