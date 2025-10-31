package com.MedConnect.MedConnect.entities;

import java.sql.Date;

public class DTO {

	private String productName;
	private double totalPrice;
	private int quantity;
	private Date orderDate;
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double d) {
		this.totalPrice = d;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date date) {
		this.orderDate = date;
	}
	@Override
	public String toString() {
		return "DTO [productName=" + productName + ", totalPrice=" + totalPrice + ", quantiy=" + quantity
				+ ", orderDate=" + orderDate + "]";
	}
	public DTO(String productName, double totalPrice, int quantity, Date orderDate) {
		super();
		this.productName = productName;
		this.totalPrice = totalPrice;
		this.quantity = quantity;
		this.orderDate = orderDate;
	}
	public DTO() {
		super();
		
	}
	
	
	
	
}
