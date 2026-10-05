package com.unimanage.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unimanage.entity.HealthAppointment;
import com.unimanage.service.HealthAppointmentService;

@RestController
@RequestMapping("/api/health-appointments")
@CrossOrigin(origins = "*")
public class HealthAppointmentController {

    private final HealthAppointmentService service;

    public HealthAppointmentController(HealthAppointmentService service) {
        this.service = service;
    }

    @PostMapping
    public HealthAppointment addAppointment(
            @RequestBody HealthAppointment appointment) {

        return service.addAppointment(appointment);
    }

    @GetMapping
    public List<HealthAppointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthAppointment> getAppointment(
            @PathVariable Integer id) {

        HealthAppointment appointment =
                service.getAppointmentById(id);

        if (appointment == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(appointment);
    }

    @GetMapping("/student/{studentId}")
    public List<HealthAppointment> getByStudentId(
            @PathVariable Integer studentId) {

        return service.getByStudentId(studentId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HealthAppointment> updateAppointment(
            @PathVariable Integer id,
            @RequestBody HealthAppointment appointment) {

        HealthAppointment updated =
                service.updateAppointment(id, appointment);

        if (updated == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(
            @PathVariable Integer id) {

        service.deleteAppointment(id);

        return ResponseEntity.ok(
                "Health appointment deleted successfully");
    }
}