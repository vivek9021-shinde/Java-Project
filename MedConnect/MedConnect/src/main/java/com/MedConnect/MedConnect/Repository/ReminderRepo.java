package com.MedConnect.MedConnect.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MedConnect.MedConnect.entities.Reminder;

public interface ReminderRepo  extends JpaRepository<Reminder,Long>{

}
