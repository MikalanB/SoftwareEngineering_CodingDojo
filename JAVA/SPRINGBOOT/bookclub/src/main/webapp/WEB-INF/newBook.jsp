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
<title>Create a Book</title>
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">
<link rel="stylesheet" href="/css/newBook.css" type="text/css">
</head>
<body>
    <div class="container"> <!-- Beginning of Container -->


        <div class="header">
            <h1>Create a Book</h1>
            <a href="/dashboard" class="btn btn-light">Back to the shelves</a>
        </div>

        <form:form action="/processBook" method="post" modelAttribute="book">
            <div class="mb-3">
                <form:label path="title" class="form-label">Title: </form:label>
                <form:errors path="title" class="alert-danger"/>
                <form:input path="title" class="form-control w-50"/>
            </div>
            <div class="mb-3">
                <form:label path="author" class="form-label">Author: </form:label>
                <form:errors path="author" class="alert-danger"/>
                <form:input path="author" class="form-control w-50"/>
            </div>
            <div class="mb-3">
                <form:label path="thoughts" class="form-label">My Thoughts: </form:label>
                <form:errors path="thoughts" class="alert-danger"/>
                <form:textarea path="thoughts" class="form-control w-50" type="number"/>
            </div>
            <input type="submit" class="btn btn-primary my-3" value="Create" />
        </form:form>
        
    </div> <!-- End of Container -->
</body>
</html>