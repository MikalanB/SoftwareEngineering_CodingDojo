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

        <h1>Edit</h1>

        <form:form action="/processUpdate/${expense.id}" method="post" modelAttribute="expense">
            <input type="hidden" value="put" name="_method"/>
            <p>
                <form:label path="name">Expense Name</form:label>
                <form:errors path="name"/>
                <form:input path="name"/>
            </p>
            <p>
                <form:label path="vendor">Vendor</form:label>
                <form:errors path="vendor"/>     
                <form:input path="vendor"/>
            </p> 
            <p>
                <form:label path="amount">Amount</form:label>
                <form:errors path="amount"/>
                <form:input type="number" path="amount"/>
            </p>
            <p>
                <form:label path="description">Description</form:label>
                <form:errors path="description"/>
                <form:textarea path="description"/>
            </p>
            <input type="submit" value="Submit"/>
        </form:form>  

        
    </div> <!-- End of Container -->
</body>
</html>