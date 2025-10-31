package com.MedConnect.MedConnect.service;

import java.util.Date;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Service;

import com.MedConnect.MedConnect.Repository.ReminderRepo;
import com.MedConnect.MedConnect.entities.Reminder;
import com.MedConnect.MedConnect.entities.Users;

@Service
public class ReminderService {

	@Autowired
	private ReminderRepo reminderRepo;

	@Autowired
	private TaskScheduler taskScheduler;

	@Autowired
	private JavaMailSender mailSender;

	public boolean scheduleReminder(Reminder reminder) {
		try {
			// Save reminder to the database
			Reminder savedReminder = reminderRepo.save(reminder);

			// Schedule the email
			scheduleEmail(savedReminder);

			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	private void scheduleEmail(Reminder reminder) {
		Runnable task = () -> sendEmail(reminder);

		Date triggerDate = Date.from(reminder.getReminderDate().atStartOfDay(ZoneId.systemDefault()).toInstant());

		taskScheduler.schedule(task, triggerDate);
	}

	private void sendEmail(Reminder reminder) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(reminder.getEmail());
		message.setSubject("MedConnect Reminder System");
		message.setText(
				"Refill Your Medicine Before It Runs Out\n\nDear Customer ,\n\nThis is a friendly reminder about your Medicine "
						+ reminder.getSubject() + ", is almost finished and it's time to refill your supply on\n"
						+ reminder.getReminderDate()
						+ "\n\nTo avoid running out,\n we recommend placing an order \n soon through the Medconnect Platfrom\n\nThank you for choosing MedConnect\n\nBest regards,\nMedConnect Team");

		mailSender.send(message);
		System.out.println("Email sent to: " + reminder.getEmail());
	}

}