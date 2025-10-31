package com.MedConnect.MedConnect.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MedConnect.MedConnect.entities.Orders;

public interface OrdersRepo extends JpaRepository<Orders, Long> {
	Orders findOrderByEmail(String email);
	List<Orders> findByuserId(Long id);
}
