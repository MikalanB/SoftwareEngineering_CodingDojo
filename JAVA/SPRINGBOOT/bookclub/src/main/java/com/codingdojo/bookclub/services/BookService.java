package com.codingdojo.bookclub.services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.repositories.BookRepository;

import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // find all books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    // find one book    
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }

    //create a book
    public Book create(Book book) {
        return bookRepository.save(book);
    }

    // update a book
    public Book update(Book book) {
        return bookRepository.save(book);
    }

    // delete a book
    public void delete(Long id) {
        bookRepository.deleteById(id);
    }

    
    
}
