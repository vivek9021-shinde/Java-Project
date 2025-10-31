package com.MedConnect.MedConnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedConnect.MedConnect.Repository.OrdersRepo;
import com.MedConnect.MedConnect.entities.Orders;
import com.MedConnect.MedConnect.entities.Users;

@Service
public class OrdersService {

	@Autowired
	private OrdersRepo orderRepo;
	
	public Orders SaveOrders(Orders order) {
		return orderRepo.save(order);
	}
	
	public List<Orders> getUserBy(Long id){
		return  orderRepo.findByuserId(id);
	}
	
}
