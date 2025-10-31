package com.MedConnect.MedConnect.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedConnect.MedConnect.entities.DTO;
import com.MedConnect.MedConnect.entities.Orders;
import com.MedConnect.MedConnect.entities.Reminder;
import com.MedConnect.MedConnect.entities.Users;
import com.MedConnect.MedConnect.requests.LoginRequest;
import com.MedConnect.MedConnect.service.MailService;
import com.MedConnect.MedConnect.service.OrdersService;
import com.MedConnect.MedConnect.service.ReminderService;
import com.MedConnect.MedConnect.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
	@Autowired
	private UserService userService;
	@Autowired
	private OrdersService orderService;
	@Autowired
	private MailService mailService;

	@Autowired
	private ReminderService reminderService;

	

	private Users loggedInUser; 
	private long userId;
	@PostMapping("/addUser")
	public String addUsers(@RequestBody Users user) {
		List<Users> us = userService.getAllUsers();
		Users savedUser = null;
		if(us.isEmpty()) {
			savedUser = userService.saveUser(user);
		}
		for (Users use : us) {
			if (use.getEmail().equals(user.getEmail()) || use.getPassword().equals(user.getPassword())) {
				return "already have an account";
			} else {
				savedUser = userService.saveUser(user);
			}
		}

		return (savedUser != null) ? "success" : "false";
	}

	@PostMapping("/loginUser")
	public String loginUser(@RequestBody LoginRequest loginRequest) {
		boolean loginSuccess = userService.LoginUser(loginRequest);

		if (loginSuccess) {
			this.loggedInUser = userService.getUserByEmail(loginRequest.getEmail());

			userId=loggedInUser.getId();
			return "success";
		} else {
			return "Invalid Username or Password";
		}
	}

	@PostMapping("/orders")
	public String addOrders(@RequestBody Orders order) {
		Date dt=Date.valueOf(LocalDate.now());
		order.setOrderDate(dt);
		System.out.println("Logged in user: " + (loggedInUser != null ? loggedInUser.getEmail() : "No user found")); 
		
		if (loggedInUser == null) {
			return "User  not logged in";
		}
		if (loggedInUser.getEmail().equals(order.getEmail())) {
			order.setUser(loggedInUser);

			if (loggedInUser.getOrder() == null) {
				loggedInUser.setOrder(new LinkedList<>()); 
			}

			loggedInUser.getOrder().add(order);

			try {

				Orders savedOrders = orderService.SaveOrders(order);
				mailService.sendMail(loggedInUser.getEmail(), order);
	
				return "success";
			
			} catch (Exception e) {
				
				e.printStackTrace();
				return e.getMessage();
			}
		}
		return "email not matched";
	}

	@PostMapping("/sendReminder")
	public String setRemainder(@RequestBody Reminder reminder) {
		if (reminderService.scheduleReminder(reminder)) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	@GetMapping("/user/order-history")
	 public ResponseEntity<List<DTO>> getUserOrderHistory() {
		System.out.println(userId);
		List<DTO> orderDTO=new LinkedList<DTO>();
		List<Orders> orders = orderService.getUserBy(userId);
		for(Orders or:orders) {
			DTO dto=new DTO();
			dto.setProductName(or.getProductName());
			dto.setQuantity(or.getQuantity());
			dto.setTotalPrice(or.getTotalPrice());
			dto.setOrderDate(or.getOrderDate());
			
			orderDTO.add(dto);
		}
		
		
       System.out.println(orderDTO.size());
        return ResponseEntity.ok(orderDTO); 
    }
}
