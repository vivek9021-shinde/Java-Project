package com.MedConnect.MedConnect.entities;

import java.sql.Date;
import java.time.LocalDate;

import com.MedConnect.MedConnect.requests.LoginRequest;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Orders {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;

    private String productName;
    private int quantity;
    private double totalPrice;
    private String fullName;
    private String streetAddress;
    private String city;
    private String state;
    private String zipCode;
    
    private String email;
    private String paymentMethod;
    private Date orderDate;
    
    @JoinColumn(name="User_order_details")
    @ManyToOne
    private Users user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Orders [id=" + id + ", productName=" + productName + ", quantity=" + quantity + ", totalPrice="
				+ totalPrice + ", fullName=" + fullName + ", streetAddress=" + streetAddress + ", city=" + city
				+ ", state=" + state + ", zipCode=" + zipCode + ", email=" + email + ", paymentMethod=" + paymentMethod
				+ ", orderDate=" + orderDate + ", user=" + user + "]";
	}

	public Orders(Long id, String productName, int quantity, double totalPrice, String fullName, String streetAddress,
			String city, String state, String zipCode, String email, String paymentMethod, Date orderDate, Users user) {
		super();
		this.id = id;
		this.productName = productName;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.fullName = fullName;
		this.streetAddress = streetAddress;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
		this.email = email;
		this.paymentMethod = paymentMethod;
		this.orderDate = orderDate;
		this.user = user;
	}

	public Orders() {
		super();
		
	}

	
	
    
	
    
    
}
