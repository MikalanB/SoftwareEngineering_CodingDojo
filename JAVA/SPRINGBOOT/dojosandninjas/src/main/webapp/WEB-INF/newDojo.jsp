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
<title>New Dojo</title>
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->

        <h1>New Dojo</h1>

        <form:form action="/processDojo" method="post" modelAttribute="dojo">
            <div class="mb-3">
                <form:label path="name" class="form-label">Name</form:label>
                <form:errors path="name" class="alert-danger"/>
                <form:input path="name" class="form-control w-50"/>
            </div>
            <input type="submit" class="btn btn-primary my-3" value="Create" />
        </form:form>


        <div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${allDojos}" var="dojo">
                        <tr>
                            <td>${dojo.name}</td>
                            <td>
                                <a href="/dojos/${dojo.id}" class="btn btn-primary">See Students</a>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
        
    </div> <!-- End of Container -->
</body>
</html>