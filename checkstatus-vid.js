if(document.body.classList.contains("active")){
    document.body.innerHTML = `
    <body>
    <div class="vid-container">
        <header> <h1>تفاعل بووين كما لم تراه من قبل</h1> </header>
        <div class="video">
          <div style="padding:46.72% 0 0 0;position:relative;">
          <iframe src="https://player.vimeo.com/video/870280020?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="تفاعل بووين كما لم تريٰ من قبل">
          </iframe>
          </div>
        </div>
        <p>
          في المحاضرة دي هتعرف ازاي بيتم تفاعل بووين والحوارات دي كلها
        </p>
        <footer>كل الحقوق محفوظة لمستر <span>حسام شعبان</span></footer>  
    </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </body>`
  }else{
    // document.body.innerHTML = `
    // <body>
    //   <div>
    //     <h1 class= "Error-h">متحاولش يالئيم</h1>
    //     <p class="Erorr-p">بص هتدوس علي   <a href="Login.html">اللينك ده</a> وهتدخل بالكود بتاعك</p>
    //   </div>
    // </body>`
    window.location.href ="Login.html"
  }