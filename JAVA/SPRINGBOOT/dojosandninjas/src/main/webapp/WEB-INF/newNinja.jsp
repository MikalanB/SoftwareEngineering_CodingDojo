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
<title>New Ninja</title>
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->

        <h1>New Ninja</h1>

        <form:form action="/processNinja" method="post" modelAttribute="ninja">
            <form:select path="dojo">
                <c:forEach var="dojo" items="${allDojos}">
                    <!--- Each option VALUE is the id of the person --->
                    <form:option value="${dojo.id}" path="dojo.id">
                    <!--- This is what shows to the user as the option --->
                        <c:out value="${dojo.name}"/>
                    </form:option>
                </c:forEach>
            </form:select>
            <div class="mb-3">
                <form:label path="firstName" class="form-label">First Name</form:label>
                <form:errors path="firstName" class="alert-danger"/>
                <form:input path="firstName" class="form-control w-50"/>
            </div>
            <div class="mb-3">
                <form:label path="lastName" class="form-label">Last Name</form:label>
                <form:errors path="lastName" class="alert-danger"/>
                <form:input path="lastName" class="form-control w-50"/>
            </div>
            <div class="mb-3">
                <form:label path="age" class="form-label">Age</form:label>
                <form:errors path="age" class="alert-danger"/>
                <form:input path="age" class="form-control w-50" type="number"/>
            </div>
            <input type="submit" class="btn btn-primary my-3" value="Create" />
        </form:form>
        
    </div> <!-- End of Container -->
</body>
</html>