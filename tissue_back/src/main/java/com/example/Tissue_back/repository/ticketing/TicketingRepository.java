package com.example.Tissue_back.repository.ticketing;

import com.example.Tissue_back.entity.member.Member;
import com.example.Tissue_back.entity.performance.Likes;
import com.example.Tissue_back.entity.ticketing.Ticketing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util. *;

import java.util.List;

public interface TicketingRepository extends JpaRepository<Ticketing, Long> {

    @Query("select t from Ticketing t where t.seatNameArr = :seatNameArr")
    Optional<Ticketing> findBySeat(@Param("seatNameArr") String [] seatNameArr);

    List<Ticketing> findByMemberId (String memberId);
    
    List<Ticketing> findTop5ByMemberIdOrderByTicketingNoDesc(String memberId);
}
