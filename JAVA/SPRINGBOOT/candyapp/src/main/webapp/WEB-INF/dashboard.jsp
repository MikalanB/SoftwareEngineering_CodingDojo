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

        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
        <a href="/newCandy" class="btn btn-primary">Add a new candy</a>
        <a href="/oneCandy" class="btn btn-primary">Show one candy</a>


        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th class="align-middle">Name</th>
                    <th class="align-middle">Brand</th>
                    <th class="align-middle">Price</th>
                    <th class="align-middle">Rating</th>
                    <th class="align-middle">Edit</th>
                    <th class="align-middle">Delete</th>
                </tr>
            <thead>
            <tbody>
                <c:forEach var="i" items="${allCandies}">
                    <tr>
                        <td class="align-middle"> <a href="/oneCandy/${i.id}" ><c:out value="${i.name}"/></a> </td>
                        <td class="align-middle"> <c:out value="${i.brand}"/> </td>
                        <td class="align-middle"> <c:out value="${i.price}"/> </td>
                        <td class="align-middle">$ <c:out value="${i.rating}"/> </td>
                        <td class="align-middle"> <a href="/editCandy/${i.id}" class="btn btn-primary">Edit</a> </td>
                        <td class="align-middle"> <a href="/deleteCandy/${i.id}" class="btn btn-primary">Delete</a> </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>

    </div> <!-- End of Container -->
</body>
</html>