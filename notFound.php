<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/null.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/notFound.css">
    <title>Тестовая работа</title>
</head>
<body>
    <?php
        include 'header.php';
    ?>
    <div class="not-found">
        <img src="img/404.svg" alt="" class="not-found__img">
        <h1 class="not-found__title">Страница не найдена</h1>
        <p class="not-found__inform">
        К сожалению, такой страницы нет. Либо администратор сайта ее удалил, либо ее никогда не существовало. 
        Попробуйте проверить адрес страницы или начните с Главной.
        </p>
        <a class="not-found__button" href="/">На главную</a>
    </div>
    <?php
        include 'footer.php';
    ?>
    <script src="/js/header.js"></script>
</body>
</html>
