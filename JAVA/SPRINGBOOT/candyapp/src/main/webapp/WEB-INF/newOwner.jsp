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
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <h1>Welcome to the Candy Carnival!</h1>

        <h2>Create a new Candy</h2>

        <form:form action="/processOwner" method="post" modelAttribute="candy">
            <p>
                <form:label path="firstName">First Name</form:label>
                <form:errors path="firstName"/>
                <form:input path="firstName"/>
            </p>
            <p>
                <form:label path="lastName">Last Name</form:label>
                <form:errors path="lastName"/>
                <form:textarea path="lastName"/>
            </p>
    <input type="submit" value="Submit"/>
</form:form>  

        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
        <a href="/newCandy" class="btn btn-primary">Add a new candy</a>
        <a href="/oneCandy" class="btn btn-primary">Show one candy</a>
        <a href="/editCandy" class="btn btn-primary">Update candy</a>

    </div> <!-- End of Container -->
</body>
</html>