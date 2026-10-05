package com.unimanage.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.unimanage.entity.HealthProfile;
import com.unimanage.repository.HealthProfileRepository;

@Service
public class HealthProfileService {

    private final HealthProfileRepository repository;

    public HealthProfileService(HealthProfileRepository repository) {
        this.repository = repository;
    }

    public HealthProfile addHealthProfile(HealthProfile profile) {
        return repository.save(profile);
    }

    public List<HealthProfile> getAllHealthProfiles() {
        return repository.findAll();
    }

    public HealthProfile getHealthProfileById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public List<HealthProfile> getByStudentId(Integer studentId) {
        return repository.findAll()
                .stream()
                .filter(profile -> profile.getStudentId().equals(studentId))
                .toList();
    }

    public HealthProfile updateHealthProfile(Integer id, HealthProfile updated) {

        HealthProfile profile = repository.findById(id).orElse(null);

        if (profile == null) {
            return null;
        }

        profile.setStudentId(updated.getStudentId());
        profile.setBloodGroup(updated.getBloodGroup());
        profile.setEmergencyContact(updated.getEmergencyContact());
        profile.setAllergies(updated.getAllergies());
        profile.setMedicalNotes(updated.getMedicalNotes());

        return repository.save(profile);
    }

    public void deleteHealthProfile(Integer id) {
        repository.deleteById(id);
    }
}