package com.unimanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unimanage.entity.HealthProfile;

public interface HealthProfileRepository extends JpaRepository<HealthProfile, Integer> {

}