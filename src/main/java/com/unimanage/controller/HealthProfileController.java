package com.unimanage.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unimanage.entity.HealthProfile;
import com.unimanage.service.HealthProfileService;

@RestController
@RequestMapping("/api/health-profiles")
@CrossOrigin(origins = "*")
public class HealthProfileController {

    private final HealthProfileService service;

    public HealthProfileController(HealthProfileService service) {
        this.service = service;
    }

    @PostMapping
    public HealthProfile addHealthProfile(
            @RequestBody HealthProfile profile) {

        return service.addHealthProfile(profile);
    }

    @GetMapping
    public List<HealthProfile> getAllHealthProfiles() {

        return service.getAllHealthProfiles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthProfile> getHealthProfile(
            @PathVariable("id") Integer id) {

        HealthProfile profile =
                service.getHealthProfileById(id);

        if (profile == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(profile);
    }

    @GetMapping("/student/{studentId}")
    public List<HealthProfile> getByStudentId(
            @PathVariable("studentId") Integer studentId) {

        return service.getByStudentId(studentId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HealthProfile> updateHealthProfile(
            @PathVariable("id") Integer id,
            @RequestBody HealthProfile profile) {

        HealthProfile updated =
                service.updateHealthProfile(id, profile);

        if (updated == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHealthProfile(
            @PathVariable("id") Integer id) {

        service.deleteHealthProfile(id);

        return ResponseEntity.ok(
                "Health profile deleted successfully");
    }
}