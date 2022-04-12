<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fruity Loops</title>
</head>
<body>
    
    <h1>Fruity Loops</h1>

    <table>
        <thead>
            <tr>Name</tr>
            <tr>Price</tr>
        </thead>
        <tbody>
            <c:forEach var="oneItem" items="${fruitsList}">
                <tr>
                    <td><c:out value="${oneItem.name}"></c:out></td>
                    <td><c:out value="${oneItem.price}"></c:out></td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</body>
</html>