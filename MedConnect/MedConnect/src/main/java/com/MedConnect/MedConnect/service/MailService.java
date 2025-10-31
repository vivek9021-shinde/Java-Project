package com.MedConnect.MedConnect.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.MedConnect.MedConnect.Repository.OrdersRepo;
import com.MedConnect.MedConnect.entities.Orders;

@Service
public class MailService {

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private OrdersRepo orderRepo;

	public void sendMail(String mail, Orders order) {

		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(mail);
		

		Date dt = Date.valueOf(LocalDate.now());
		message.setSentDate(dt);
		message.setSubject("Your Order has been placed");
		message.setFrom("Medconnect");
		message.setText("Dear " + order.getFullName()
				+ ",\n\nThank you for your order! Here are the details of your purchase." + "\n\nproductName:"
				+ order.getProductName() + "\nquantity:" + order.getQuantity() + "\ntotalPrice:" + order.getTotalPrice()
				+ "\nstreetAddress:" + order.getStreetAddress() + "\ncity:" + order.getCity() + "\nstate:"
				+ order.getState() + "\npinCode:" + order.getZipCode() + "\npaymentMethod:" + order.getPaymentMethod()
				+ "\n\nWe appreciate your trust in MedConnect Products.\nIf you have any questions, feel free to contact us.\n\nBest regards,\nMedconnect Products Team");

		javaMailSender.send(message);
	}
}
