package junsung.springboot.service;

import junsung.springboot.dto.writer;

import java.util.LinkedList;

public class saveQuote {
    writer writer = new writer();

    private LinkedList<writer> Quotes = new LinkedList<>();

    private final int INDEX = 0;
    public void success(){
        System.out.println("저자 : " + writer.getAuthor());
        System.out.println("제목 : " + writer.getTitle());
        System.out.println("내용 : " + writer.getText());
        System.out.println("참조 주소 : " + Quotes.get(INDEX));

    }

    public void saving(){
        Quotes.push(writer);

    }

}
