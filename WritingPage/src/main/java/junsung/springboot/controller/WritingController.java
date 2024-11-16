package junsung.springboot.controller;
import junsung.springboot.dto.writer;
import junsung.springboot.service.saveQuote;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.LinkedList;
import java.util.Objects;

@Controller
public class WritingController {

    private saveQuote saveQuote;


    @GetMapping("/write")
    public String write() {
        return "write";

    }


    @GetMapping("/main")
    public String main() {
        return "main";
    }

    @GetMapping("/view")
    public String list() {
        return "view";

    }

    @PostMapping("/write")
    public String writePost(@ModelAttribute writer writer) {
       saveQuote.success();
       saveQuote.saving();
       return "write";
    }


}
