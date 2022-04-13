<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <title>Show Omikuji</title>
</head>
<body>
    <div class="d-flex flex-column justify-content-center w-100 align-items-center">
        <h1 class="text-center">Here's Your Omikuji!!</h1>
        <div class="bg-primary w-50 my-3 d-flex justify-content-center">
            <h3>
                In <c:out value="${inputNumber}" /> years, you will live in <c:out value="${city}"/> with <c:out value="${person}"/> as your roomate, <c:out value="${hobby}"/> as your hobby. The next time you see a <c:out value="${living}"/>, you will have good luck. Also, <c:out value="${nice}"/>.
            </h3>
        </div>
        <a href="/omikuji" class="btn btn-primary w-50">Go back</a>
    </div>
</body>
</html>