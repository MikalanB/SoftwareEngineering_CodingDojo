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
        
        <div>
        <h1>Expense Details</h1>
        <a href="/expenses">Go back</a>
        </div>

        <table>
            <tr>
                <th>Expense Name</th>
                <td>${expense.name}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${expense.description}</td>
            </tr>
            <tr>
                <th>Vendor</th>
                <td>${expense.vendor}</td>
            </tr>
            <tr>
                <th>Amount Spent</th>
                <td>${expense.amount}</td>
            </tr>
        </table>
    </div> <!-- End of Container -->
</body>
</html>