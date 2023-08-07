package com.example.qqw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration;

@SpringBootApplication()
public class QqwApplication {

    public static void main(String[] args) {
        SpringApplication.run(QqwApplication.class, args);
    }

}
