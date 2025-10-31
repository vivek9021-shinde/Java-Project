package com.MedConnect.MedConnect.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedConnect.MedConnect.Repository.UsersRepo;
import com.MedConnect.MedConnect.entities.Users;
import com.MedConnect.MedConnect.requests.LoginRequest;


@Service
public class UserService {
	@Autowired
	private UsersRepo usersRepo;
	
	
	public Users saveUser(Users user) {
		return usersRepo.save(user);
	}
	public Users getUserByEmail(String email) {
		return usersRepo.getUsersByEmail(email);
	}
	public boolean LoginUser(LoginRequest loginRequest) {
	    Users user = usersRepo.getUsersByEmail(loginRequest.getEmail());
	    
	    if (user!=null) {
	        
	        if (user.getPassword().equals(loginRequest.getPassword()) &&
	            user.getEmail().equals(loginRequest.getEmail())) {
	            return true;
	        }
	    }
	    return false;
	}
	public List<Users> getAllUsers(){
		return usersRepo.findAll();
	}

	
}

