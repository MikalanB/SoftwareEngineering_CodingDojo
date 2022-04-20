<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!-- c:out ; c:forEach ; c:if -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<!-- Formatting (like dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show Book</title>
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">
<link rel="stylesheet" href="/css/showBook.css" type="text/css">
</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        
        <div class="header">
            <h1>${book.title}</h1>
            <a href="/dashboard" class="btn btn-light">Back to the shelves</a>
        </div>

        <c:choose>
            <c:when test="${user.id == book.user.id}">
                <div class="header">
                    <h4> <span class="username">You</span> read <span class="book-title">${book.title}</span> by <span class="book-author">${book.author}</span>.</h4>
                </div>
            </c:when>
            <c:otherwise>
                <div class="header">
                    <h4> <span class="username">${book.user.username}</span> read <span class="book-title">${book.title}</span> by <span class="book-author">${book.author}</span>.</h4>
                    <a href="/book/add/${book.id}" class="btn btn-light">Add this book to your shelf</a>
                </div>
            </c:otherwise>
        </c:choose>

        <hr>

        <p>${book.thoughts}</p>

        <hr>


        <c:choose>
            <c:when test="${user.id == book.user.id}">
                <a href="/book/edit/${book.id}" class="btn btn-light">Edit</a>
            </c:when>
            <c:otherwise>
                <a href="/book/edit/${book.id}" class="btn btn-light" style="pointer-events: none">Edit</a>
            </c:otherwise>
        </c:choose>

    </div> <!-- End of Container -->
</body>
</html>