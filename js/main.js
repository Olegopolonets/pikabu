// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");

const regExpValideEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSingUp = document.querySelector(".login-singup");

const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");

const exitElem = document.querySelector(".exit");
const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");

const editUsername = document.querySelector(".edit-username");
const editPhotoURL = document.querySelector(".edit-photo");
const userAvatarElem = document.querySelector(".user-avatar");

const postsWrapper = document.querySelector(".posts");

const listUsers = [
  {
    id: "01",
    email: "cocos2cocos@gmail.com",
    password: "123",
    displayName: "OlehPaper",
  },
  {
    id: "02",
    email: "sasha@mail.com",
    password: "12345",
    displayName: "SummerDuck",
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    if (!regExpValideEmail.test(email)) {
      alert("email не валиден");
      return;
    }

    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь с такими данными не найден");
    }
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  singUp(email, password, handler) {
    if (!regExpValideEmail.test(email)) {
      alert("email не валиден");
      return;
    }

    if (!email.trim() || !password.trim()) {
      alert("Введите данные!");
      return;
    }

    if (!this.getUser(email)) {
      const user = { email, password, displayName: email.substring(0, email.indexOf("@")) };
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь с таким email уже зарегистрирован");
    }
  },
  editUser(userName, userPhoto = "", handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }
    handler();
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  },
};

const setPosts = {
  allPosts: [
    {
      title: "Заголовок поста",
      text:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!",
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: "sasha@mail.com",
      date: "11.11.2020, 18:42:15",
      like: 30,
      comments: 15,
    },

    {
      title: "Заголовок второго поста",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ad hic, ducimus consequuntur accusantium nulla sapiente quia animi totam libero quo est facere! Impedit, laudantium sint! Repellendus quo necessitatibus cumque, animi nostrum veniam dolore veritatis omnis similique quae accusantium! Ex.",
      tags: ["свежее", "новое", "мое", "случайность"],
      author: "cocos2cocos@gmail.com",
      date: "10.11.2020, 14:52:25",
      like: 69,
      comments: 45,
    },

    {
      title: "Заголовок поста 3",
      text:
        "Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? ",
      tags: ["свежее", "новое", "мое", "случайность"],
      author: "cocos2cocos@gmail.com",
      date: "10.11.2020, 14:52:25",
      like: 69,
      comments: 45,
    },
  ],
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log("toggleAuthDom -> user", user);

  if (user) {
    loginElem.style.display = "none";
    userElem.style.display = "";
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
  } else {
    loginElem.style.display = "";
    userElem.style.display = "none";
  }
};

const showAllPosts = () => {
  let postsHTML = "";

  setPosts.allPosts.forEach((post) => {
    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-text">${post.text}</p>
      <div class="tags">
        <a href="#" class="tag">#свежее</a>
        <a href="#" class="tag">#новое</a>
        <a href="#" class="tag">#горячее</a>
        <a href="#" class="tag">#мое</a>
        <a href="#" class="tag">#случайность</a>
      </div>
    </div>
    <div class="post-footer">
      <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">126</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">1</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">arteislamov</a>
          <span class="post-time">5 минут назад</span>
        </div>
        <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
      </div>
    </div>
  </section>
    `;
  });
  postsWrapper.innerHTML = postsHTML;
};

const init = () => {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  loginSingUp.addEventListener("click", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.singUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  exitElem.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener("click", (event) => {
    event.preventDefault();
    editContainer.classList.toggle("visible");
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove("visible");
  });
  // отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener("click", function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle("visible");
  });

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});
