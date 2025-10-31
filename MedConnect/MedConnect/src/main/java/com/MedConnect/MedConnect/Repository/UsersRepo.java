package com.MedConnect.MedConnect.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MedConnect.MedConnect.entities.Users;



@Repository
public interface UsersRepo extends JpaRepository<Users,Long>{

	Users getUsersByEmail(String email);
	
}

