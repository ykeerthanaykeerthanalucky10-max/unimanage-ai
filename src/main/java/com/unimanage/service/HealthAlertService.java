package com.unimanage.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.unimanage.entity.HealthAlert;
import com.unimanage.repository.HealthAlertRepository;

@Service
public class HealthAlertService {

    private final HealthAlertRepository repository;

    public HealthAlertService(HealthAlertRepository repository) {
        this.repository = repository;
    }

    public HealthAlert addAlert(HealthAlert alert) {
        return repository.save(alert);
    }

    public List<HealthAlert> getAllAlerts() {
        return repository.findAll();
    }

    public HealthAlert getAlertById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public List<HealthAlert> getByStudentId(Integer studentId) {
        return repository.findAll()
                .stream()
                .filter(alert -> alert.getStudentId().equals(studentId))
                .toList();
    }

    public HealthAlert updateAlert(Integer id, HealthAlert updated) {

        HealthAlert alert = repository.findById(id).orElse(null);

        if (alert == null) {
            return null;
        }

        alert.setStudentId(updated.getStudentId());
        alert.setAlertType(updated.getAlertType());
        alert.setMessage(updated.getMessage());
        alert.setPriority(updated.getPriority());
        alert.setCreatedAt(updated.getCreatedAt());

        return repository.save(alert);
    }

    public void deleteAlert(Integer id) {
        repository.deleteById(id);
    }
}