<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>formulier</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="main.js" defer></script>
</head>

<body><?php if ($_POST != "" && $_POST != null){ ?>
    <span id="secondPage"></span>
    Welcome <?php echo htmlspecialchars( $_POST["name"] ); ?><br>
    <div class="redditPage">
        <div class="post">
            <p class="title">Posted by <span class="name">Henk</span> 19 minutes ago</p>
            <h1>This is the title of the post</h1>
            <div class="postFooter">
                <p class="footerText">3 comments</p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name">Charlie</span> 5 minutes ago</p>
            <p>Wow, this is a great post!</p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    <div class="redditPage">
        <div class="post">
            <p class="title">Posted by <span class="name">Henk</span> 19 minutes ago</p>
            <h1>This is the title of the post</h1>
            <div class="postFooter">
                <p class="footerText">3 comments</p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name">Charlie</span> 5 minutes ago</p>
            <p>Wow, this is a great post!</p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    <?php } else { ?>
        <form method="post">
        <label for="fname">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="fname" id="label1"></label><br>
        <input type="hidden" id="type1" name="type1" />
        <input type="text" id="answer1" name="answer1" required><br>
        <label for="fname" id="label2"></label><br>
        <input type="hidden" id="type2" name="type2" />
        <input type="text" id="answer2" name="answer2" required><br>
        <label for="fname" id="label3"></label><br>
        <input type="hidden" id="type3" name="type3" />
        <input type="text" id="answer3" name="answer3" required><br>
        <label for="fname" id="label4"></label><br>
        <input type="hidden" id="type4" name="type4" />
        <input type="text" id="answer4" name="answer4" required><br>
        <label for="fname" id="label5"></label><br>
        <input type="hidden" id="type5" name="type5" />
        <input type="text" id="answer5" name="answer5" required><br>
        <input type="submit">
    </form> 
    <?php } ?>
</body>