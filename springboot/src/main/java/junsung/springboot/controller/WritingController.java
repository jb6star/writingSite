package junsung.springboot.controller;
import junsung.springboot.dto.writer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WritingController {



    @GetMapping("/write")
    public String write() {
        return "write";
    }

    @PostMapping("/write")
    public String writePost(@ModelAttribute writer writer) {
        System.out.println("저자 : " + writer.getAuthor());
        System.out.println("제목 : " + writer.getTitle());
        System.out.println("내용 : " + writer.getContent());
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
}
