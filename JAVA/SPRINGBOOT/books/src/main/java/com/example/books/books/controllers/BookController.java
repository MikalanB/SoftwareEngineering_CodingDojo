package com.example.books.books.controllers;

import java.util.List;

import com.example.books.books.models.Book;
import com.example.books.books.services.BookService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class BookController {

    //injecting our candy service
    private final BookService bookService;

    public BookController(BookService bookService) {
        super();
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "/books/index";
    }

    @GetMapping("/books/{id}")
    public String show(@PathVariable("id") Long id, Model model ) {
        Book book = bookService.findBook(id);

        model.addAttribute("id", book.getId());
        model.addAttribute("title", book.getTitle());
        model.addAttribute("description", book.getDescription());
        model.addAttribute("language", book.getLanguage());
        model.addAttribute("numOfPages", book.getNumberOfPages());

        return "show";
    }

    
}
