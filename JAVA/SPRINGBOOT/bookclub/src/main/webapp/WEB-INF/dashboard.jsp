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
<title>Login and Registration</title>
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">
<link rel="stylesheet" href="/css/dashboard.css" type="text/css">
</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <div class="header">
            <h1>Welcome ${user.username}</h1>
            <a href="/logout" class="btn btn-light">Logout</a>
        </div>
        <div class="header">
            <h5>Books from everyone's shelves</h5>
            <a href="/newBook" class="btn btn-light">Add a book to my shelf</a>
        </div>

        <div class="wrapper">
            <table class="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>Posted By</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${allBooks}" var="book">
                        <tr>
                            <td>${book.id}</td>
                            <td><a href="/book/${book.id}">${book.title}</a></td>
                            <td>${book.author}</td>
                            <td>${book.user.username}</td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
        
        
    </div> <!-- End of Container -->
</body>
</html>