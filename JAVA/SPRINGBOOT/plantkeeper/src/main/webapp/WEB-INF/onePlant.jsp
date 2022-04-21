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
        
        <h1>Welcome ${user.firstName}, Check out this plant</h1>

        <a href="#" class="btn btn-primary">Add Plant</a>
        <a href="#" class="btn btn-primary">View Plants</a>
        <a href="#" class="btn btn-primary">Edit plants</a>
        <a href="/logout" class="btn btn-primary">Logout</a>

        <h5>Plant name: ${plant.name}</h5>
        <p>Description: ${plant.description}</p>
        <p>Watering Schedule: ${plant.schedule}</p>
        <p>Created by: ${plant.user.firstName}</p>

    </div> <!-- End of Container -->
</body>
</html>