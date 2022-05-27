package com.example.Tissue_back;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/test")
public class testController {

    //임지훈 컨트롤러
    @PostMapping("/test1")
    public void test(){
        log.info("테스트()");

    }
    //임지훈 컨트롤러
}
