package com.MedConnect.MedConnect.entities;



import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Users {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String email;
	private String name;
	
	private String password;
	
	
	@OneToMany(mappedBy="user",cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	private List<Orders> order;


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public List<Orders> getOrder() {
		return order;
	}


	public void setOrder(List<Orders> order) {
		this.order = order;
	}


	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	


	public Users(Long id, String email, String name, String password, List<Orders> order) {
		super();
		this.id = id;
		this.email = email;
		this.name = name;
		this.password = password;
		this.order = order;
	}


	
	public String toString() {
		return "Users [id=" + id + ", email=" + email + ", name=" + name + ", password=" + password + ", order=" + order
				+ "]";
	}


	public Users() {
		super();
		
	}
	
	
	
}
