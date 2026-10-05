package com.unimanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unimanage.entity.HealthAlert;

public interface HealthAlertRepository extends JpaRepository<HealthAlert, Integer> {

}