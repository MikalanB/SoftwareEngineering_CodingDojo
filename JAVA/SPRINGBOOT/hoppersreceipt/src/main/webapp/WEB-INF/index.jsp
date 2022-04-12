<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grace Hopper Receipt</title>
</head>
<body>
    <h1>Customer Name: <c:out value="${fullName}"></c:out></h1>

    <p>Item name: <c:out value="${itemName}"></c:out></p>
    <p>Price: <c:out value="${price}" /></p>
    <p>Description: <c:out value="${description}"></c:out></p>
    <p>Vendor: <c:out value="${vendor}"></c:out></p>

</body>
</html>