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

<body>
<div class="sidebar" id="sidebar">
    <div class="sidebarContent">
    <header class="title">
        <img src="reddit-logo.png" class="logo" alt="">
        <h1 class="sidebarText">Freddit</h1>
    </header>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="clickable marginBottom"><div class="clickable marginBottom">
    <img src="yt.png" class="logo clickable marginLeft" alt="">
        <h3 class="sidebarText clickable">The creation of..</h3>
        </div></a>
        </div><footer class="marginBottom footer"><a href="https://github.com/oldmartijntje" class="clickable"><div class="clickable">
    <img src="oldmartijntje.png" class="logo clickable marginLeft" alt="">
        <p class="sidebarText clickable">OldMartijntje 2023©</p>
        </div></a></footer>
  </div>
  
  <div class="content" id="content">
  <button id="sideBarToggle" onclick="sidebarClick()"><img id="sideBarToggleImg" class="logo grey" src="toggle.png" alt=""></button>
  <?php if ($_POST != "" && $_POST != null){ ?>
    <span id="secondPage" data-value="<?php echo htmlspecialchars( $_POST["name"] ); ?>"></span><br>
    <div class="page">
    <div class="redditPage">
        <div class="post" id="post1" data-value="<?php echo htmlspecialchars( $_POST["type1"] ); ?>">
            <p class="title">Posted by <span class="name" id="rName1"></span> <span id="agoTime1" class="title"></span></p>
            <h1 id="title1"></h1>
            <div class="postFooter">
                <p class="footerText" id="rComments1"></p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name", id="name1"></span> a few seconds ago</p>
            <p id="comment1" data-value="<?php echo htmlspecialchars( $_POST["answer1"] ); ?>"></p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    <div class="redditPage">
        <div class="post" id="post2" data-value="<?php echo htmlspecialchars( $_POST["type2"] ); ?>">
            <p class="title">Posted by <span class="name" id="rName2"></span> <span id="agoTime2" class="title"></span></p>
            <h1 id="title2"></h1>
            <div class="postFooter">
                <p class="footerText" id="rComments2"></p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name", id="name2"></span> a few seconds ago</p>
            <p id="comment2" data-value="<?php echo htmlspecialchars( $_POST["answer2"] ); ?>"></p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    <div class="redditPage">
        <div class="post" id="post3" data-value="<?php echo htmlspecialchars( $_POST["type3"] ); ?>">
            <p class="title">Posted by <span class="name" id="rName3"></span> <span id="agoTime3" class="title"></span></p>
            <h1 id="title3"></h1>
            <div class="postFooter">
                <p class="footerText" id="rComments3"></p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name", id="name3"></span> a few seconds ago</p>
            <p id="comment3" data-value="<?php echo htmlspecialchars( $_POST["answer3"] ); ?>"></p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    <div class="redditPage">
        <div class="post" id="post4" data-value="<?php echo htmlspecialchars( $_POST["type4"] ); ?>">
            <p class="title">Posted by <span class="name" id="rName4"></span> <span id="agoTime4" class="title"></span></p>
            <h1 id="title4"></h1>
            <div class="postFooter">
                <p class="footerText" id="rComments4"></p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name", id="name4"></span> a few seconds ago</p>
            <p id="comment4" data-value="<?php echo htmlspecialchars( $_POST["answer4"] ); ?>"></p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    <div class="redditPage">
        <div class="post" id="post5" data-value="<?php echo htmlspecialchars( $_POST["type5"] ); ?>">
            <p class="title">Posted by <span class="name" id="rName5"></span> <span id="agoTime5" class="title"></span></p>
            <h1 id="title5"></h1>
            <div class="postFooter">
                <p class="footerText" id="rComments5"></p>
                <p class="footerText">share</p>
                <p class="footerText">save</p>
            </div>
        </div>
        <div class="comment">
            <p class="title"><span class="name", id="name5"></span> a few seconds ago</p>
            <p id="comment5" data-value="<?php echo htmlspecialchars( $_POST["answer5"] ); ?>"></p>
            <div class="postFooter">
                <p class="footerText">reply</p>
                <p class="footerText">share</p>
            </div>
        </div>
    </div>
    </div>
    
    <?php } else { ?>
        <form method="post" class="form">
        <label class="question" for="fname">Username:</label><br>
        <input class="inputText" type="text" id="name" name="name" required><br>
        <label class="question" for="fname" id="label1"></label><br>
        <input type="hidden" id="type1" name="type1" />
        <input class="inputText" type="text" id="answer1" name="answer1" required><br>
        <label class="question" for="fname" id="label2"></label><br>
        <input type="hidden" id="type2" name="type2" />
        <input class="inputText" type="text" id="answer2" name="answer2" required><br>
        <label class="question" for="fname" id="label3"></label><br>
        <input type="hidden" id="type3" name="type3" />
        <input class="inputText" type="text" id="answer3" name="answer3" required><br>
        <label class="question" for="fname" id="label4"></label><br>
        <input type="hidden" id="type4" name="type4" />
        <input class="inputText" type="text" id="answer4" name="answer4" required><br>
        <label class="question" for="fname" id="label5"></label><br>
        <input type="hidden" id="type5" name="type5" />
        <input class="inputText" type="text" id="answer5" name="answer5" required><br>
        <input class="submit" type="submit">
    </form> 
    <?php } ?>
  </div>
</body>