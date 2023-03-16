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
        </div><footer class="marginBottom footer"><a target="_blank" href="https://github.com/oldmartijntje" class="clickable"><div class="clickable">
    <img src="oldmartijntje.png" class="logo clickable marginLeft borderRadius" alt="">
        <p class="sidebarText clickable">OldMartijntje 2023©</p>
        </div></a></footer>
  </div>
  
  <div class="content" id="content">
  <button id="sideBarToggle" onclick="sidebarClick()"><img id="sideBarToggleImg" class="logo grey" src="toggle.png" alt=""></button>
  <?php if ($_POST != "" && $_POST != null){ ?>
    <span id="secondPage"></span><br>
    <script>
        var obj = JSON.parse('<?php echo json_encode($_POST) ?>');
        console.log(obj);
        amount = 0;
        amount = obj["amount"];
        document.getElementById("secondPage").setAttribute("data-value", obj["name"]);
    </script>
    <div class="page" id="fullPage">
        <div class="redditPage" id="redditPage">
            <div class="post" id="post1" data-value="<?php echo htmlspecialchars( $_POST["type1"] ); ?>">
                <p class="title">Posted by <span class="name" id="rName1"></span> <span id="agoTime1" class="title"></span></p>
                <h1 id="title1"></h1>
                <div class="postFooter">
                    <a class="footerText" id="rComments1"></a>
                    <a id="share1" target="_blank" title="Submit to Reddit" class="footerText">share</a>
                    <a class="footerText">save</a>
                </div>
            </div>
            <div class="comment">
                <p class="title"><span class="name", id="name1"></span> a few seconds ago</p>
                <p id="comment1" data-value="<?php echo htmlspecialchars( $_POST["answer1"] ); ?>"></p>
                <div class="postFooter">
                    <a class="footerText">reply</a>
                    <a id="shareComment1" target="_blank" title="Submit to Reddit" class="footerText">share</a>
                </div>
            </div>
        </div>
    </div>
    <script src="functions.js"></script>
        <script>
            for (let index = 1; index < Number(amount)+1; index++) {
                createPost(index, obj[formID(index, "type")], obj[formID(index, "answer")],document.getElementById("secondPage").dataset.value)
                
            }
        </script>
    <?php } else { ?>
        <form method="post" class="form">
        <input type="hidden" id="amount" name="amount" value="5" />
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