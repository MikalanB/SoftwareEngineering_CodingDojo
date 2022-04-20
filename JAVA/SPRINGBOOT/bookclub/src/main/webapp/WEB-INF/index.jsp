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
<title>Title Here</title>
<link rel="stylesheet" type="text/css" href="/css/styles.css">
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">

<style>
    body {
    background-color:#827397;
}
</style>
</head>
<body>
    <div class="header">
        <h1 class="title">Book Club</h1>
        <h5>A place for friends to share thoughts on books</h5>
    </div>
    <div class="container"> <!-- Beginning of Container -->
        <div class="wrapper-1">
            <h2>Register</h2>
            <form:form action="/register" method="post" modelAttribute="newUser" >
                <div class="form-group mb-3">
                    <label>User Name:</label>
                    <form:input path="username" class="form-control" />
                    <form:errors path="username" class="text-danger" />
                </div>
                <div class="form-group mb-3">
                    <label>Email:</label>
                    <form:input path="email" class="form-control" />
                    <form:errors path="email" class="text-danger" />
                </div>
                <div class="form-group mb-3">
                    <label>Password:</label>
                    <form:password path="password" class="form-control" />
                    <form:errors path="password" class="text-danger" />
                </div>
                <div class="form-group mb-3">
                    <label>Confirm Password:</label>
                    <form:password path="confirmPassword" class="form-control" />
                    <form:errors path="confirmPassword" class="text-danger" />
                </div>
                <input type="submit" value="Register" class="btn btn-primary" />
            </form:form>
        </div>
            
        <div class="wrapper-2">
            <h2>Login</h2>
            <form:form action="/login" method="post" modelAttribute="newLogin">
                <div class="form-group mb-3">
                    <label>Email:</label>
                    <form:input path="email" class="form-control" />
                    <form:errors path="email" class="text-danger" />
                </div>
                <div class="form-group mb-3">
                    <label>Password:</label>
                    <form:password path="password" class="form-control" />
                    <form:errors path="password" class="text-danger" />
                </div>
                <input type="submit" value="Login" class="btn btn-success" />
            </form:form>
        </div>
    </div> <!-- End of Container -->
</body>
</html>