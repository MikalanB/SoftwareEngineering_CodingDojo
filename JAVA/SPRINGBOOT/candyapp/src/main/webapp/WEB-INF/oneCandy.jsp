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

        <h2>This displays one candy</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td> <c:out value="${candy.name}"/></td>
                <td> <c:out value="${candy.brand}"/></td>
                <td> <c:out value="${candy.price}"/></td>
                <td> <c:out value="${candy.rating}"/></td>
            </tr>
        </table>

        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
        <a href="/newCandy" class="btn btn-primary">Add a new candy</a>
        <a href="/editCandy" class="btn btn-primary">Update candy</a>

        

    </div> <!-- End of Container -->
</body>
</html>