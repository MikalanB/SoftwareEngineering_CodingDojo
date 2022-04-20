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
        
        <h1>Welcome ${user.firstName} To The Plant Keeper Dashboard</h1>

        <a href="#" class="btn btn-primary">Add Plant</a>
        <a href="#" class="btn btn-primary">View Plants</a>
        <a href="#" class="btn btn-primary">Edit plants</a>
        <a href="/logout" class="btn btn-primary">Logout</a>

        <c:forEach var="i" items="${allPlants}">
            <ul>
                <li><a href="/onePlant/${i.id}">${i.name}</a> - ${i.description} - ${user.firstName} <a class="btn btn-info" href="/editPlant/${i.id}">Edit Plant</a></li>
            </ul>
        </c:forEach>

    </div> <!-- End of Container -->
</body>
</html>