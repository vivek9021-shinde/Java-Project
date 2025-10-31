package com.MedConnect.MedConnect.entities;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Reminder {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
    private String email;
    private String subject;
    private LocalDate reminderDate;
    
    
	public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public LocalDate getReminderDate() {
        return reminderDate;
    }

	public Reminder() {
		super();
		
	}

	public Reminder(String email, String subject, LocalDate reminderDate) {
		super();
		this.email = email;
		this.subject = subject;
		this.reminderDate = reminderDate;
	}

	

	

  

}
