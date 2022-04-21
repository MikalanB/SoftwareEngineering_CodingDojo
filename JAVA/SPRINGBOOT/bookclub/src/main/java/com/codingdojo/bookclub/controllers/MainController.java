package com.codingdojo.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.LoginUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.BookService;
import com.codingdojo.bookclub.services.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class MainController {

    private final UserService userService;
    private final BookService bookService;

    public MainController(UserService userService, BookService bookService) {
        super();
        this.userService = userService;
        this.bookService = bookService;
    }
    
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }


    // Route to Register User
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
        
        if (result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index";
        } else {
            userService.register(newUser, result);
            session.setAttribute("user_id", newUser.getId());
            return "redirect:/dashboard";
        }
    }


    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
        User user = userService.login(newLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index";
        } else {
            session.setAttribute("user_id", user.getId());
            return "redirect:/dashboard";
        }
    }

    // logout user
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    //create dashboard
    @GetMapping("/dashboard")
    public String dashboard(HttpSession session, Model model) {

        if(session.getAttribute("user_id") != null) {
            model.addAttribute("allBooks", bookService.allBooks());
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            return "dashboard";
        } else {
            return "redirect:/";
        }
    }

    // create a new book page
    @GetMapping("/newBook")
    public String newBook(@ModelAttribute("book") Book book, @ModelAttribute("user") User user, Model model, HttpSession session) {
        if(session.getAttribute("user_id") != null) {
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            model.addAttribute("newBook", new Book());
            return "newBook";
        } else {
            return "redirect:/";
        }
    }

    // process new book page
    @PostMapping("/processBook")
    public String processBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model, HttpSession session) {
        if(result.hasErrors()) {
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            return "newBook";
        } else {
            book.setUser(userService.oneUser((Long) session.getAttribute("user_id")));
            bookService.create(book);
            return "redirect:/dashboard";
        }
    }

    // show one book
    @GetMapping("/book/{id}")
    public String showBook(@ModelAttribute("book") Book book, @ModelAttribute("user") User user, @ModelAttribute("id") Long id, Model model, HttpSession session) {
        if(session.getAttribute("user_id") != null) {
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            model.addAttribute("book", bookService.findBook(id));
            return "showBook";
        } else {
            return "redirect:/";
        }
    }

    // edit book page
    @GetMapping("/book/edit/{id}")
    public String editBook(@ModelAttribute("book") Book book, @ModelAttribute("user") User user, @ModelAttribute("id") Long id, Model model, HttpSession session) {
        if(session.getAttribute("user_id") != null) {
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            model.addAttribute("book", bookService.findBook(id));
            return "editBook";
        } else {
            return "redirect:/";
        }
    }

    // process edit book page
    @PutMapping("/book/processEdit/{id}")
    public String processEditBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model, HttpSession session) {
        if(result.hasErrors()) {
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            return "editBook";
        } else {
            book.setUser(userService.oneUser((Long) session.getAttribute("user_id")));
            bookService.update(book);
            return "redirect:/dashboard";
        }
    }


    // borrow a book/ update book status
    @PutMapping("/book/borrow/{id}/{status}")
    public String borrowBook(@ModelAttribute("book") Book book, @ModelAttribute("id") Long id, @ModelAttribute("status") Boolean status, Model model, HttpSession session) {
        book.setUser(userService.oneUser((Long) session.getAttribute("user_id")));
        book.setStatus(status);
        bookService.update(book);
        return "redirect:/dashboard";
    }

}
