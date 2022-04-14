package com.example.books.books.services;

import java.util.List;
import java.util.Optional;

import com.example.books.books.models.Book;
import com.example.books.books.repositories.BookRepository;

import org.springframework.stereotype.Service;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }

    //updates a book
    public Book updateBook(Long id, String title, String description, String language, Integer numOfPages) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(title);
            book.setDescription(description);
            book.setLanguage(language);
            book.setNumberOfPages(numOfPages);
            return bookRepository.save(book);
        } else {
            return null;
        }
    }

    //deletes a book
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
