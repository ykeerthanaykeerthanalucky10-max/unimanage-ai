package com.unimanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unimanage.entity.HealthAppointment;

public interface HealthAppointmentRepository extends JpaRepository<HealthAppointment, Integer> {

}