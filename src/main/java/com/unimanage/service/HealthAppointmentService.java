package com.unimanage.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.unimanage.entity.HealthAppointment;
import com.unimanage.repository.HealthAppointmentRepository;

@Service
public class HealthAppointmentService {

    private final HealthAppointmentRepository repository;

    public HealthAppointmentService(HealthAppointmentRepository repository) {
        this.repository = repository;
    }

    public HealthAppointment addAppointment(HealthAppointment appointment) {
        return repository.save(appointment);
    }

    public List<HealthAppointment> getAllAppointments() {
        return repository.findAll();
    }

    public HealthAppointment getAppointmentById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public List<HealthAppointment> getByStudentId(Integer studentId) {
        return repository.findAll()
                .stream()
                .filter(appointment ->
                        appointment.getStudentId().equals(studentId))
                .toList();
    }

    public HealthAppointment updateAppointment(
            Integer id, HealthAppointment updated) {

        HealthAppointment appointment =
                repository.findById(id).orElse(null);

        if (appointment == null) {
            return null;
        }

        appointment.setStudentId(updated.getStudentId());
        appointment.setDoctorName(updated.getDoctorName());
        appointment.setAppointmentDate(updated.getAppointmentDate());
        appointment.setAppointmentTime(updated.getAppointmentTime());
        appointment.setReason(updated.getReason());
        appointment.setStatus(updated.getStatus());

        return repository.save(appointment);
    }

    public void deleteAppointment(Integer id) {
        repository.deleteById(id);
    }
}