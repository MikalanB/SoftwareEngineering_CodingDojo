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
    <title>Omikuji form</title>
</head>
<body>
    <h1 class="text-center">Send an Omikuji!</h1>

    <div class="w-100 d-flex justify-content-center">
        <form class="d-flex flex-column w-75" action="/omikuji/send" method="POST">
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" name="inputNumber">
                <label for="floatingInput">Pick any number from 5 to 25</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="name@example.com" name="city">
                <label for="floatingPassword">Enter the name of any city</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="name@example.com" name="person">
                <label for="floatingPassword">Enter the name of any real person</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="name@example.com" name="hobby">
                <label for="floatingPassword">Enter professional endeavor or hobby:</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="name@example.com" name="living">
                <label for="floatingPassword">Enter the name of any type of living thing</label>
            </div>
            <div class="mb-3">
                <label for="floatingPassword">Say something nice to someone:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="nice"></textarea>
            </div>

            <p>Send and show a friend</p>
            <input type="submit" class="btn btn-primary w-75" value="Send">
        </form>
    </div>
</body>
</html>